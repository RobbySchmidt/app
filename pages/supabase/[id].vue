<template>
  <div class="p-4 max-w-5xl mx-auto">
    <div 
      class="rounded-xl overflow-hidden shadow-md">
      <NuxtPicture
        v-if="image.image && image.title" 
        format="avif,webp"
        :src="image.image"
        width="1000"
        height="560"
        sizes="sm:100vw"
        :alt="image.title"/>
      <span
        v-if="image.description" 
        class="block text-center p-4">
        {{ image.description.content }}
      </span>
    </div>
  </div>
</template>

<script setup>
  const { params } = useRoute()

  const supabase = useSupabaseClient();

  const { data: image, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('id', params.id)
    .single()
</script>

<style scoped>

</style>