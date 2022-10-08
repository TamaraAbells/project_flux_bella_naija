<template>
  <div class="relative flex flex-col justify-between items-center gap-2">
    <div class="flex flex-col justify-center items-center gap-2">
      <div class="inline-flex justify-center items-center w-full">
        <hr class="my-8 w-72 h-1.5 bg-red-500 border-0">
        <div class="absolute px-4 bg-white -translate-x-1/2">
        <div class="flex justify-center items-center gap-3">
          <h1 class="text-lg uppercase font-bold">RECENT COMMENTS</h1>
        </div>
        </div>
      </div>
      <div>
        <div v-for="item, i in Array(11).fill()" :key="i" class="py-1">
          <p class="text-sm text-black leading-5 tracking-5 pr-10 pb-2 border-b cursor-pointer hover:text-red-500 hover:underline">
            Xiaomi 12T Pro Flagship Features Latest 200MP Imaging System | Check it Out
          </p>
        </div>
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