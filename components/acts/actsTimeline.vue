<script setup lang="ts">
  import desertoParallax from '@/assets/img/acts/desertoParallax.webp'
  import cableSalade from '@/assets/img/acts/cableSalad.webp'
  import traf from '@/assets/img/acts/traf.webp'
  import irie from '@/assets/img/acts/irie.webp'
  import sims from '@/assets/img/acts/sims.webp'
  import swings from '@/assets/img/acts/swings.webp'
  import sethSchwarz from '@/assets/img/acts/sethSchwarz.webp'
  import stevo from '@/assets/img/acts/stevo.webp'
  import nemie from '@/assets/img/acts/nemie.webp'

  import type { Act } from '~/types/schema'

  const props = defineProps<{
    acts: Act[]
    showTimeline?: boolean
  }>()

  const selectedAct = ref<Act | undefined>(undefined)

  const images: Record<string, string> = {
    desertoParallax,
    cableSalade,
    traf,
    irie,
    sims,
    swings,
    sethSchwarz,
    stevo,
    nemie,
  }

  function getSrc(image: string): string | undefined {
    return images[image]
  }

  function closeBottomSheet(update: boolean = false): void {
    if (!update) {
      selectedAct.value = undefined
    }
  }

  function getTimelineBorder(index: number): string | undefined {
    if (!props.showTimeline) return

    if (index % 2 === 0) {
      return 'timeline-border-right'
    } else {
      return 'timeline-border-left'
    }
  }

  function getYearIntersection(index: number): number | false {
    if (!props.showTimeline || index < 0) return false
    if (index === 0) return props.acts[index].year

    const previousAct = props.acts[index - 1]
    const currentAct = props.acts[index]

    if (currentAct.year !== previousAct.year) return currentAct.year

    return false
  }
</script>

<template>
  <v-row class="justify-center">
    <v-col
      v-for="(act, actIndex) in props.acts"
      :key="act.id"
      class="v-col-12 v-col-sm-7 v-col-lg-12"
    >
      <v-row class="align-center">
        <!-- year switch -->
        <v-col
          v-if="getYearIntersection(actIndex)"
          class="v-col-12 my-2 my-lg-0"
        >
          <v-row>
            <v-col class="v-col-6 year-switch-border pt-8 pt-lg-16" />
            <v-col class="v-col-12 text-center py-0">
              <h1>{{ getYearIntersection(actIndex) }}</h1></v-col
            >
            <v-col class="v-col-6 year-switch-border pt-8 pt-lg-16" />
          </v-row>
        </v-col>

        <!-- acts -->
        <v-col
          class="v-col-12 v-col-lg-6 py-6 py-sm-8"
          :class="[
            actIndex % 2 === 0 ? 'order-0' : 'order-1 right-timeline-correct',
            getTimelineBorder(actIndex),
          ]"
        >
          <v-card class="cursor-pointer" @click="selectedAct = act">
            <v-row>
              <v-col class="v-col-12 position-relative">
                <v-img
                  :src="getSrc(act.image as string)"
                  alt=""
                  :aspect-ratio="1"
                  cover
                />
              </v-col>
              <div class="text-grey-lighten-3 pa-4 bg-black-0-3 img-overlay">
                <v-row
                  class="justify-center justify-lg-space-between align-center align-lg-end h-100"
                >
                  <v-col class="v-col-auto text-center">
                    <h2>
                      <b>{{ act.title }}</b>
                    </h2>

                    <v-btn
                      class="hidden-lg-and-up mt-6"
                      prepend-icon="mdi mdi-play"
                    >
                      Play & Bio
                    </v-btn>
                  </v-col>
                  <v-col class="v-col-auto hidden-md-and-down">
                    <v-btn prepend-icon="mdi mdi-open-in-new"> Bio </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="v-col-6 hidden-md-and-down">
          <div v-html="act.radioHtmlCode" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-bottom-sheet
    :model-value="!!selectedAct"
    inset
    max-height="75vh"
    @update:model-value="closeBottomSheet"
  >
    <v-sheet v-if="selectedAct" class="pa-6">
      <v-row class="align-center justify-space-between flex-nowrap">
        <v-col class="v-col-auto">
          <h2><span class="hidden-lg-and-up">Play & </span>Bio</h2>
        </v-col>
        <v-col class="v-col-auto">
          <v-btn
            variant="outlined"
            rounded
            icon="mdi mdi-close"
            :size="$vuetify.display.mdAndUp ? 'default' : 'small'"
            @click="closeBottomSheet()"
          />
        </v-col>
      </v-row>
      <!-- player -->
      <div class="hidden-lg-and-up pt-6" v-html="selectedAct.radioHtmlCode" />

      <!-- bio text -->
      <p class="pt-6">
        {{ selectedAct?.long_description }}
      </p>
    </v-sheet>
  </v-bottom-sheet>
</template>

<style scoped lang="scss">
  @use 'sass:map';
  @use 'vuetify/settings';

  .img-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .year-switch-border {
    border-right: 2px solid rgba(0, 0, 0, 0.1);
  }

  @media #{map.get(settings.$display-breakpoints, 'lg-and-up')} {
    .timeline-border-right {
      border-right: 2px solid rgba(0, 0, 0, 0.1);
    }

    .timeline-border-left {
      border-left: 2px solid rgba(0, 0, 0, 0.1);
    }
  }

  .right-timeline-correct {
    margin-left: -2px;
  }
</style>
