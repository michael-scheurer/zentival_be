<script setup lang="ts">
  import BoxedContent from '~/components/layout/boxedContent.vue'
</script>

<template>
  <v-footer color="primary" height="540">
    <boxed-content>
      <v-row class="justify-space-between w-100">
        <v-col class="v-col-auto">
          <h3>Kontakt</h3>
          <p class="text-white pt-3">
            Verein Zentival <br />
            3006 Bern <br />
            zentival@burgfeld.ch
          </p>
        </v-col>
        <v-col class="v-col-auto text-right pr-0">
          <v-btn
            to="/impressum"
            append-icon="mdi-open-in-new"
            variant="outlined"
          >
            Impressum
          </v-btn>

          <br />

          <v-btn
            class="mt-6"
            to="/datenschutz"
            append-icon="mdi-open-in-new"
            variant="outlined"
          >
            Datenschutz
          </v-btn>
        </v-col>
      </v-row>
    </boxed-content>
  </v-footer>
</template>
