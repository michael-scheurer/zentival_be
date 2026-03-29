<template>
  <v-row class="justify-center h-100">
    <v-col class="v-col-12 max-container">
      <slot/>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
  @use 'sass:map';
  @use 'vuetify/settings';

  .max-container {
    padding: 24px;
  }

  @media #{map.get(settings.$display-breakpoints, 'md-and-up')} {
    .max-container {
      max-width: 3200px;
      padding: 100px;
    }
  }
</style>