import type { H3Event } from 'h3'
import type { TotalAmount } from '~/server/utils/payment-helper.ts'
import IdealPayment from '~/server/utils/IdealPayment'

export default defineEventHandler(
  async (_event: H3Event<Request>): Promise<TotalAmount> => {
    try {
      const currentYear = new Date().getFullYear()
      const filterDateFrom = `${currentYear}-01-01 00:00:00`

      const limit = 100
      let offset = 0
      let totalAmount = 0
      let hasMore = true

      const client = new IdealPayment()

      while (hasMore) {
        const response = await client.getTransactions({
          filterDatetimeUtcGreaterThan: filterDateFrom,
          offset,
          limit,
        })

        const transactions = response?.data || []

        if (!Array.isArray(transactions) || transactions.length === 0) {
          hasMore = false
          break
        }

        for (const tx of transactions) {
          if (tx.status === 'confirmed') {
            totalAmount += tx.amount || 0
          }
        }

        if (transactions.length < limit) {
          hasMore = false
        } else {
          offset += limit
        }
      }

      // Amount from Payrexx API is in cents, convert to whole CHF
      totalAmount = Math.round(totalAmount / 100)

      return {
        totalAmount,
      }
    } catch (e) {
      console.log(e)
      return {
        error: e?.toString(),
      }
    }
  },
)
