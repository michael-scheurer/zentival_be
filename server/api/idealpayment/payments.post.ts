import type { H3Event } from 'h3'
import type { CheckoutUrl } from '~/server/utils/payment-helper.ts'

export default defineEventHandler(
  async (event: H3Event<Request>): Promise<CheckoutUrl> => {
    try {
      const { amount } = await readBody(event)

      if (amount === undefined) {
        throw new Error('amount not defined.')
      }

      const config = useRuntimeConfig()
      const instance = config.idealPaymentInstance as string

      const currentYear = new Date().getFullYear()
      const invoiceNumber = `Zentival ${currentYear}`

      const params = new URLSearchParams({
        tid: '174071bd',
        invoice_number: invoiceNumber,
        invoice_amount: String(amount),
      })

      const checkoutUrl = `https://${instance}.ideal-pay.ch/pay?${params.toString()}`

      return {
        checkoutUrl,
      }
    } catch (e) {
      console.log(e)
      return {
        error: e?.toString(),
      }
    }
  },
)
