<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
  import { useStore } from '@/stores/store.ts'
  const { fetchImages } = useStore()
  await fetchImages()
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>