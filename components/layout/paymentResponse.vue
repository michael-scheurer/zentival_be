<script setup lang="ts">
  import { PartyPopper } from 'lucide-vue-next'

  const { query } = useRoute()
  const open = ref<boolean>(false)

  onMounted(() => {
    if (query.payment === 'success') {
      open.value = true
    }
  })
</script>

<template>
  <v-dialog
    v-model="open"
    width="auto"
    max-width="450"
    transition="dialog-top-transition"
  >
    <v-card class="pa-8">
      <v-card-title>
        <v-row class="justify-space-between">
          <v-col class="col-auto"> Danke für Deinen Beitrag! </v-col>
          <v-col class="col-auto text-end">
            <PartyPopper
              :color="$vuetify.theme.current.colors.secondary"
              :size="30"
            />
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="text-wrap">
        Ohne Deine Unterstützung wäre das Zentival 2026 nicht möglich. Wir
        freuen uns auf Dich.
      </v-card-text>
      <v-card-actions class="justify-center" @click="open = false">
        <v-btn variant="outlined">Ich freu mich auch ;)</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
