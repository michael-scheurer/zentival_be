<script setup lang="ts">
  import introductionImg from '@/assets/img/index/intro.webp'
  import BoxedContent from '~/components/layout/boxedContent.vue'
  import { useGoTo } from 'vuetify'

  const goTo = useGoTo()
</script>

<template>
  <v-parallax
    :src="introductionImg"
    class="parallax-container text-grey-lighten-3"
  >
    <boxed-content>
      <v-row class="align-center h-100">
        <v-col class="v-col-12">
          <h1>
            Eine Nacht. <br />
            Eine Bühne.
          </h1>

          <h3 class="pt-5 font-weight-light text-grey-lighten-3 pt-16">
            22. August 2026 | Bern | 17 h
          </h3>
        </v-col>
      </v-row>
    </boxed-content>
  </v-parallax>

  <!-- support btn -->
  <v-row class="support-btn-container v-row--no-gutters">
    <v-col
      class="v-col-12 text-center text-sm-left pb-6 pb-lg-12 pl-sm-3 pl-md-0"
    >
      <v-btn
        rounded
        color="secondary"
        :size="$vuetify.display.mdAndUp ? 'x-large' : 'large'"
        prepend-icon="mdi mdi-party-popper"
        @click="
          goTo('#founding', {
            duration: 500,
          })
        "
      >
        Mitfeiern & unterstützen
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
  @use 'sass:map';
  @use 'vuetify/settings';

  .parallax-container {
    height: 100vh;
  }

  .introduction-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .support-btn-container {
    z-index: 10;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
  }

  @media #{map.get(settings.$display-breakpoints, 'md-and-up')} {
    .support-btn-container {
      left: 100px;
    }
  }
</style>
