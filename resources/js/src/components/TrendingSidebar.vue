<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <div class="inline-flex justify-center items-center w-full">
      <hr class="my-8 w-60 h-1.5 bg-red-500 border-0">
      <div class="absolute px-4 bg-white -translate-x-1/2">
      <div class="flex justify-center items-center gap-3">
        <font-awesome-icon icon="fa-solid fa-arrow-trend-up" class="h-6 text-red-500" />
        <h1 class="text-2xl uppercase font-black">Trending</h1>
      </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-5 divide-y divide-gray-200">
      <div v-for="item, i in Array(3).fill()" :key="i" class="pt-5">
        <circular-image />
      </div>
    </div>
    <div class="mt-10 flex justify-end items-end">
      <div class="flex flex-row justify-start items-center gap-2 text-red-500">
        <p class="uppercase text-sm leading-5">More Trending Stories</p>
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="h-5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    CircularImage: () => import('./CircularImage')
  }
}
</script>