<script setup lang="ts">
  import {useTotalPayments} from '~/store/totalPayments'
  
  const GOAL_AMOUNT = 3000
  const totalPayments = useTotalPayments()
  
  const progress = computed<number>(() => {
    if (!totalPayments.totalAmount) {
      return 0
    }
    return totalPayments.totalAmount * 100 / GOAL_AMOUNT
  })
</script>

<template>
  <div
    v-if="totalPayments.totalAmount === undefined"
    class="text-center">
    <p>Lade Crowdfunding-Fortschritt</p>
    <v-skeleton-loader
      type="heading"
    />
  </div>
  <v-progress-linear
    v-else
    :height="$vuetify.display.lgAndUp ? '100px' : '75px'"
    :model-value="progress"
    rounded
    color="primary"
    class="text-white text-center"
  >
    <v-row class="v-row--no-gutters">
      <v-col class="v-col-12">
        <h2>Bereits {{ new Intl.NumberFormat('de-CH', {style: 'currency', currency: 'chf', maximumFractionDigits: 0}).format(totalPayments.totalAmount) }}</h2>
      </v-col>
      <v-col class="v-col-12">
        <p class="text-white">von {{ new Intl.NumberFormat('de-CH', {style: 'currency', currency: 'chf', maximumFractionDigits: 0}).format(GOAL_AMOUNT) }} chf</p>
      </v-col>
    </v-row>
  </v-progress-linear>
</template>