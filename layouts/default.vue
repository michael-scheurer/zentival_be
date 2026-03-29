<script setup lang="ts">
import Notifications from '~/components/layout/notifications.vue'
import PaymentResponse from '~/components/layout/paymentResponse.vue'
</script>

<template>
  <v-app>
    <notifications />
    <v-layout>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
    <payment-response />
  </v-app>
</template>