<script setup lang="ts">
  import aboutImg from '@/assets/img/index/about_2025.webp'
</script>

<template>
  <v-row>
    <!-- title -->
    <v-col class="v-col-12 text-center mb-8 mb-md-12 pb-0">
      <h1>
        Zwischen<br />
        Industrie und Quartier
      </h1>
    </v-col>

    <v-col class="v-col-12 v-col-lg-9 pt-0">
      <!-- image & text -->
      <v-row class="justify-center">
        <v-col class="v-col-12 v-col-sm-7 v-col-md-6 v-col-lg-8">
          <v-img :src="aboutImg as string" :aspect-ratio="1" cover />
        </v-col>
        <v-col
          class="about-text-container v-col-10 v-col-sm-5 v-col-md-6 v-col-lg-4"
        >
          <p class="pl-3 pl-md-6">
            Eine Nacht. Eine Bühne. Drei Bands. Ein Tanz. Das ist unser
            Zentival. Am östlichen Stadtrand Berns, eingebettet zwischen
            Industriecharme und Wohnquartier.
            <br />
            <br />
            Eine WG und drei Familien organisieren das Zentival nach 2023 in der
            vierten Auflage. Für die Stadt. Fürs Quartier. Für Freunde und die
            Freude.
            <br />
            <br />
            Unsere Motivation sind kleine aber feine Acts. Kein professionelles
            aber ein umso kreativeres Ambiente. Die Bühne haben wir selbst
            gebaut. Die Bar öffnen wir nur an diesem Samstagabend. In unserem
            Garten darfst du verweilen, gar ein Bad im Coldpot nehmen, dich an
            der Feuerschale wärmen oder dein Essen grillieren. Ausserdem findest
            Du einen Mini-Camping und einen Essensstand.
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
  @use 'sass:map';
  @use 'vuetify/settings';

  .about-text-container {
    z-index: 9;
    margin-top: -96px;
    background-color: white;
  }

  @media #{map.get(settings.$display-breakpoints, 'sm-and-up')} {
    .about-text-container {
      margin-top: 0;
    }
  }
</style>
