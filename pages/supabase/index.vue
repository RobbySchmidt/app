<template>
  <div class="lg:w-8/12 lg:grid-cols-3 mx-auto grid gap-4 p-4">
    <cardSB 
      v-if="gallery"
      v-for="image in gallery" 
      :image="image" />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
  
const { data: gallery, error } = await supabase
  .from('gallery')
  .select('*')
</script>

<style scoped>

</style>