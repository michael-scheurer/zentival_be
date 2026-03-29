<script setup lang="ts">
const acts = useActs()

const { data } = await useAsyncData('acts-current', async () => {
  return await acts.getActs({ mode: 'current' })
})
</script>

<template>
  <div class="w-100 text-center">
    <h1 class="mb-8 mb-md-12">Die Acts</h1>
  </div>

  <acts-timeline :acts="data || []" />
</template>
