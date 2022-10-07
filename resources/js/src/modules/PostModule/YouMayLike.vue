<template>
  <div>
    <div class="w-auto flex flex-col justify-start gap-2">
      <div class="flex justify-start items-center gap-2">
        <h2 class="uppercase text-2xl font-bold whitespace-nowrap">You May Like</h2>
        <hr class="w-full h-1.5 bg-red-500 border-0">
      </div>
      <div class="flex justify-center items-center gap-5">
        <div v-for="card in spotlights" :key="card.topText">
          <div class="flex flex-col justify-center items-center gap-5">
            <img class="w-80 h-auto"
              :src="require('../../assets/BellaNaija-Weddings-43-560x600.jpg')"
            />
            <p class="text-black text-sm font-bold leading-5">
              With “Anikulapo” Kunle Afolayan Stretches his Creative Range
              The Yoruba Culture Was on Full Display at the Premiere of Kunle Afolayan’s “Anikulapo” | See Photos
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      spotlights: [
        { topText: 'Sweet Spot', moreText: 'More Sweet Spot' },
        { topText: 'Events', moreText: 'More Events' },
        { topText: 'Nollywood', moreText: 'More Nollywood' },
      ]
    }
  }
}
</script>