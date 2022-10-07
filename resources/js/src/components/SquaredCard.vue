<template>
  <div class="w-48 flex flex-col justify-center align-center gap-2">
    <img class="w-48 h-48 z-10 mt-10"
      :src="require('../assets/BellaNaija-Weddings-43-560x600.jpg')"
    />
    <div class="image_placement z-0 flex justify-between items-end -ml-4">
      <div class="w-20 h-20 bg-red-600" />
      <p class="uppercase font-bold text-base flex self-end p-0 -mb-1">Features</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.image_placement {
  position: relative;
  bottom: 70px;
}
</style>