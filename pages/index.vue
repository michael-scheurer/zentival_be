<script setup lang="ts">
import Introduction from '~/components/index/introduction.vue'
import About from '~/components/index/about.vue'
import Acts from '~/components/index/acts.vue'
import BoxedContent from '~/components/layout/boxedContent.vue'
import SoundFooter from '~/components/index/sound-footer.vue'
import Funding from '~/components/index/funding.vue'
import echo from '~/components/index/echo.vue'
</script>

<template>
  <!-- intro -->
  <introduction />

  <!-- about -->
  <section class="section-margin">
    <boxed-content>
      <about />
    </boxed-content>
  </section>

  <!-- acts -->
  <section class="section-margin bg-grey-lighten-3">
    <boxed-content>
      <acts />
    </boxed-content>
  </section>

  <!-- funding -->
  <section class="section-margin">
    <boxed-content>
      <funding />
    </boxed-content>
  </section>

  <!-- echo -->
  <section class="section-margin bg-grey-lighten-3">
    <boxed-content><echo /></boxed-content>
  </section>

  <!-- funding repeat -->
  <section class="section-margin page-end-margin">
    <boxed-content>
      <funding />
    </boxed-content>
  </section>

  <sound-footer />
</template>

<style lang="scss">
.section-margin {
  margin-top: 120px;
}

.page-end-margin {
  margin-bottom: 120px;
}
</style>
