<script setup lang="ts">
  import {
    type CheckoutUrl,
    getPaymentProviderUrl,
  } from '~/server/utils/payment-helper.ts'
  import { useNotify } from '~/store/notification'

  const notify = useNotify()

  interface SupportOption {
    amount: number | 'custom'
  }

  const supportOptions: SupportOption[] = [
    {
      amount: 20,
    },
    {
      amount: 30,
    },
    {
      amount: 50,
    },
    {
      amount: 100,
    },
    {
      amount: 200,
    },
    {
      amount: 'custom',
    },
  ]

  const PAYMENT_DESCRIPTION = 'Support Zentival 2026 Bern'

  const customAmount = ref<string | undefined>(undefined)

  async function pay(supportOption: SupportOption) {
    try {
      // calc amount to pay
      let amount
      if (typeof supportOption.amount === 'string') {
        if (!customAmount.value) {
          return
        }
        amount = parseInt(customAmount.value, 10)
      } else {
        amount = supportOption.amount
      }

      const SUCCESS_URL = `${window.location.origin}?payment=success`
      const CANCEL_URL = `${window.location.origin}?payment=cancel`
      const apiUrl = getPaymentProviderUrl()

      const { checkoutUrl, error } = (await $fetch(apiUrl, {
        method: 'post',
        body: {
          amount,
          description: PAYMENT_DESCRIPTION,
          successUrl: SUCCESS_URL,
          cancelUrl: CANCEL_URL,
        },
      })) as CheckoutUrl

      if (error) {
        throw new Error(error)
      }

      if (!checkoutUrl) {
        throw new Error('No checkout url provided!')
      }

      window.location.assign(checkoutUrl)
    } catch (error) {
      notify.error({
        text:
          error?.toString() || 'Unbekannter Fehler bei der Zahlungsinitierung.',
      })
    }
  }
</script>

<template>
  <v-row id="founding" class="justify-center align-center">
    <v-col class="v-col-12 text-center mb-8 mb-md-12 pb-0">
      <h1>Die Gage</h1>
    </v-col>

    <v-col class="v-col-12 v-col-md-6 v-col-lg-4 text-center pt-0">
      <p>
        Wir möchten Musiker:innen fair bezahlen. Und wir möchten ein Fest für
        Alle - egal ob mit kleinem oder grossem Budget - ermöglichen. Nur mit
        Deinem Beitrag können wir beides.
      </p>
    </v-col>
    <v-col class="v-col-12 v-col-md-6 v-col-lg-4">
      <founding-progress />
    </v-col>
  </v-row>

  <v-row class="pt-8 pt-md-16 text-center justify-center">
    <v-col
      v-for="(supportOption, supportOptionIndex) in supportOptions"
      :key="supportOptionIndex"
      class="v-col-6 v-col-md-4 cursor-pointer"
    >
      <v-card
        variant="tonal"
        height="108px"
        class="align-content-center"
        color="success"
        @click="pay(supportOption)"
      >
        <v-card-title class="pt-4">
          <h2 v-if="typeof supportOption.amount === 'number'">
            CHF {{ supportOption.amount }}
          </h2>
          <v-text-field
            v-else
            v-model="customAmount"
            label="Betrag selbst wählen"
            prefix="CHF"
            type="number"
            density="compact"
            variant="underlined"
            hide-details
            class="pb-2"
            @keyup.enter="pay(supportOption)"
          />
        </v-card-title>
        <v-card-text v-if="typeof supportOption.amount === 'number'"
          >Jetzt unterstützen</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>
