<template>
  <div class="relative flex flex-col justify-between items-center gap-2">
    <div class="flex flex-col justify-center items-center gap-2">
      <div class="inline-flex justify-center items-center w-full">
        <hr class="my-8 w-60 h-1.5 bg-red-500 border-0">
        <div class="absolute px-4 bg-white -translate-x-1/2">
        <div class="flex justify-center items-center gap-3">
          <h1 class="text-3xl uppercase font-black">LATEST</h1>
        </div>
        </div>
      </div>
      <div>
        <div v-for="item, i in Array(11).fill()" :key="i" class="py-2">
          <p class="text-sm text-black leading-5 tracking-5 pr-10 pt-5 border-t">
            Xiaomi 12T Pro Flagship Features Latest 200MP Imaging System | Check it Out
          </p>
        </div>
      </div>
    </div>
    <div class="mt-10 flex justify-end items-end">
      <div class="flex flex-row justify-start items-center gap-2 text-red-500">
        <p class="uppercase text-sm leading-5">More Latest Stories</p>
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