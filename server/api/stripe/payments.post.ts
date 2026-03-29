import type {H3Event} from 'h3'
import Stripe from 'stripe'
import type {CheckoutUrl, StripePaymentInput,} from '~/server/utils/payment-helper.ts'
import {readAndCreatePaymentBody} from '~/server/utils/payment-helper.ts'

export default defineEventHandler(
  async (event: H3Event<Request>): Promise<CheckoutUrl> => {
    try {
      const config = useRuntimeConfig()
      const stripeApiKey = config.stripeApiKey
      const stripe = new Stripe(stripeApiKey, {
        apiVersion: '2025-05-28.basil',
      })

      const paymentBody = (await readAndCreatePaymentBody(
        event,
        'stripe'
      )) as StripePaymentInput

      const { url: checkoutUrl } = await stripe.checkout.sessions.create(
        paymentBody
      )

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
