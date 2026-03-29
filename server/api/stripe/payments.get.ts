import type { H3Event } from 'h3'
import Stripe from 'stripe'
import type { TotalAmount } from '~/server/utils/payment-helper.ts'

export default defineEventHandler(
  async (event: H3Event<Request>): Promise<TotalAmount> => {
    const config = useRuntimeConfig()
    const stripeApiKey = config.stripeApiKey

    try {
      const stripe = new Stripe(stripeApiKey, {
        apiVersion: '2025-05-28.basil',
      })

      const { available } = await stripe.balance.retrieve()
      const totalAmountInCents = available
        .filter((balance) => balance.currency === 'chf')
        .reduce((sum, item) => sum + (item.amount || 0), 0)

      const totalAmount = Math.round(totalAmountInCents / 100)
      return {
        totalAmount,
      }
    } catch (error) {
      return {
        error: error?.toString(),
      }
    }
  }
)
