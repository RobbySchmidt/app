<template>
  <div class="lg:w-8/12 lg:grid-cols-3 mx-auto grid gap-4 p-4">
    <card 
      v-if="images"
      v-for="image in images" 
      :image="image" />
  </div>
</template>

<script setup>
  import { useStore } from '@/stores/store'

  const { images } = useStore()
</script>

<style scoped>

</style>