<template>
  <v-row class="justify-space-between pt-8">
    <v-col class="v-col-auto pr-0">
      <v-btn
          icon="mdi mdi-arrow-left"
          variant="tonal"
          color="secondary"
          size="small"
          @click="$router.go(-1)"
      />
    </v-col>
    <v-col class="v-col-auto text-center px-1">
      <h2>
        <slot />
      </h2>
    </v-col>
    <v-col class="v-col-auto pl-0"></v-col>
  </v-row>
</template>