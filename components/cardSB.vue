<template>
  <NuxtLink
    v-if="image.id"
    :to="'/supabase/' + image.id">
    <div 
      class="rounded-xl overflow-hidden shadow-md">
      <img
        v-if="image.image && image.title" 
        :src="image.image" 
        :alt="image.title">
      <span
        v-if="image.title" 
        class="py-1 block text-center">
        {{ image.title }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
   image: Object
  })
</script>

<style scoped>

</style>