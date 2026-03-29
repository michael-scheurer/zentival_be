import type { H3Event } from 'h3'
import type Stripe from 'stripe'

export type PaymentProvider = 'stripe' | 'mollie'

export interface TotalAmount {
  error?: string
  totalAmount?: number
}

export interface CheckoutUrl {
  checkoutUrl?: string
  error?: string
}

export interface MolliePaymentInput {
  amount: {
    currency: 'CHF'
    value: string
  }
  description: string
  redirectUrl: string
  cancelUrl: string
}

export interface MolliePayment extends MolliePaymentInput {
  id: string
  createdAt: string
  status:
    | 'open'
    | 'pending'
    | 'authorized'
    | 'paid'
    | 'canceled'
    | 'expired'
    | 'failed'
}

export type StripePaymentInput = Stripe.Checkout.SessionCreateParams

export async function readAndCreatePaymentBody(
  event: H3Event<Request>,
  paymentProvider: PaymentProvider,
): Promise<MolliePaymentInput | StripePaymentInput> {
  const { amount, description, cancelUrl, successUrl } = await readBody(event)

  if (amount === undefined) {
    throw new Error('amount not defined.')
  }
  if (!description) {
    throw new Error('description not defined.')
  }
  if (!cancelUrl || !successUrl) {
    throw new Error('success or cancel url not defined.')
  }

  const currency = 'CHF'

  if (paymentProvider === 'mollie') {
    return {
      amount: {
        currency,
        value: (amount as number).toFixed(2).toString(),
      },
      description,
      redirectUrl: successUrl,
      cancelUrl,
    }
  } else {
    return {
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items: [
        {
          price_data: {
            currency,
            unit_amount: amount * 100,
            product_data: {
              name: 'Zentival 2026',
              description,
            },
          },
          quantity: 1,
        },
      ],
    }
  }
}

export function getPaymentProviderUrl(): string {
  const config = useRuntimeConfig()
  const baseUrl = '/api'
  const paymentProvider = config.public.paymentProvider

  if (paymentProvider === 'stripe') {
    return `${baseUrl}/stripe/payments`
  }
  if (paymentProvider === 'mollie') {
    return `${baseUrl}/mollie/payments`
  }

  throw new Error(
    `Payment Provider ${paymentProvider} not supported by Soundcrowd!`,
  )
}
