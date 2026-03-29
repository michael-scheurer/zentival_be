import type { H3Event } from 'h3'
import Mollie from '~/server/utils/Mollie'
import {
  type CheckoutUrl,
  readAndCreatePaymentBody,
} from '~/server/utils/payment-helper.ts'

export default defineEventHandler(
  async (event: H3Event<Request>): Promise<CheckoutUrl> => {
    try {
      const paymentBody = await readAndCreatePaymentBody(event, 'mollie')

      const payment = await new Mollie().action({
        method: 'POST',
        url: '/payments',
        body: paymentBody,
      })

      const checkoutUrl = payment?._links?.checkout?.href
      if (!checkoutUrl) {
        throw new Error('Checkout-Link konnte nicht abgerufen werden.')
      }
      return {
        checkoutUrl,
      }
    } catch (e) {
      console.log(e)
      return {
        error: e?.toString(),
      }
    }
  }
)
