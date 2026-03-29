import { defineStore } from 'pinia'
import { useNotify } from '~/store/notification'
import { ref } from 'vue'
import {
  getPaymentProviderUrl,
  type TotalAmount,
} from '~/server/utils/payment-helper.ts'

export const useTotalPayments = defineStore('totalPayments', () => {
  const notify = useNotify()

  const totalAmount = ref<number | undefined>(undefined)

  onMounted(async () => {
    totalAmount.value = await getTotalAmount()
  })

  async function getTotalAmount(): Promise<number | undefined> {
    try {
      // get either stripe or mollie url
      const apiUrl = getPaymentProviderUrl()

      const { totalAmount, error } = (await $fetch(apiUrl, {
        method: 'get',
      })) as TotalAmount

      if (error) {
        notify.error({ text: error })
      }

      return totalAmount
    } catch (error) {
      notify.error({ text: error?.toString() || '' })
    }
  }

  return {
    totalAmount,
  }
})
