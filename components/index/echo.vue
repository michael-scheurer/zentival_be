<script setup lang="ts">
const acts = useActs()

const { data } = await useAsyncData('echo-acts', async () => {
  return await acts.getActs({ mode: 'past' })
})
</script>

<template>
  <div class="w-100 text-center">
    <h1 class="mb-8 mb-md-12">Der Nachklang</h1>
  </div>

  <acts-timeline :acts="data || []" show-timeline />
</template>
