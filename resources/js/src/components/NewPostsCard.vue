<template>
  <div>
    <div class="flex flex-row justify-start gap-5">
      <img
        :src="require('../assets/xiaomi-phone.jpg')"
        class="w-96 h-60"
      />
      <div class="flex flex-col justify-start items-start gap-1 py-2">
        <div class="flex flex-col justify-start">
          <p class="font-semibold uppercase text-xs text-gray-500">PROMOTIONS</p>
          <h1 class="font-normal capitalize text-base text-black text-2xl">
            Xiaomi 12T Pro Flagship Features Latest 200MP Imaging System | Check it Out
          </h1>
        </div>
        <p class="font-normal text-sm text-gray-500">
          Xiaomi 12T Pro' leading imaging system presents unprecedented smartphone imagery experience
        </p>
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