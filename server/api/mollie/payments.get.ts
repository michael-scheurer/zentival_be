import type {H3Event} from 'h3'
import type {MolliePayment, TotalAmount} from '~/server/utils/payment-helper.ts'

export default defineEventHandler(
  async (_event: H3Event<Request>): Promise<TotalAmount> => {
    try {
      const FILTER_BY_DATE_NEWER_THAN = new Date(new Date().getFullYear(), 0, 1)

      // url params default sets
      const limit = 250
      let payments: MolliePayment[] = []

      // helpers for the loop
      let lastPayment
      let loadMore: boolean = true
      while (loadMore) {
        // compose the url params
        let params: { [key: string]: string | number } = {
          limit,
        }

        if (lastPayment?.id) {
          params = {
            ...params,
            from: lastPayment.id as string,
          }
        }

        const response = await new Mollie().action({
          method: 'GET',
          url: '/payments',
          params,
        })

        const { count, _embedded } = response

        if (!count || count < limit) {
          loadMore = false
        }

        const newPayments = _embedded?.payments
        if (newPayments) {
          // check if older payments ar inside this call
          const filteredPayments = newPayments.filter((newPayment: MolliePayment) => {
            const paymentDate = new Date(newPayment.createdAt)
            return paymentDate > FILTER_BY_DATE_NEWER_THAN
          })

          // If filtered payments ar less than all the new payments, this means that we have had older payments.
          // Thus, stop loading more payments
          if (filteredPayments.length < newPayments.length) {
            loadMore = false
          }

          payments = [...payments, ...filteredPayments]
        }

        lastPayment = newPayments[newPayments.length - 1]
      }

      // because of the pagination logic of Mollie we have to filter for payment duplicates
      const uniquePayments = payments.filter(
        (payment, index, array) =>
          array.findIndex((i) => i.id === payment.id) === index
      )

      // calculate the total amount
      let totalAmount: number = 0
      for (const payment of uniquePayments) {
        if (payment.status !== 'paid') {
          continue
        }
        totalAmount += parseInt(payment.amount.value)
      }

      return {
        totalAmount,
      }
    } catch (e) {
      console.log(e)
      return {
        error: e?.toString(),
      }
    }
  }
)
