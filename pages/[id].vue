<template>
  <div class="p-4 max-w-5xl mx-auto">
    <div 
      class="rounded-xl overflow-hidden shadow-md">
      <img
        v-if="image.image && image.title" 
        :src="image.image" 
        :alt="image.title">
      <span
        v-if="image.description" 
        class="block text-center p-4">
        {{ image.description }}
      </span>
    </div>
  </div>
</template>

<script setup>
  const { params } = useRoute()
  import { useStore } from '@/stores/store'

  const store = useStore()
  
  const image = computed(() => { 
    return store.getImageById(params.id)
  })
</script>

<style scoped>

</style>