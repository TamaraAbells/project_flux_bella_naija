<template>
  <div>
    <div class="_bg-explore flex flex-col justify-center items-center gap-0">
      <h2 class="text-red-600 uppercase text-2xl font-bold">Explore</h2>
      <div class="w-full flex flex-row justify-center">
        <div class="flex flex-row justify-evenly items-center gap-10">
          <div v-for="card in spotlights" :key="card.topText">
            <SquaredCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SquaredCard: () => import('../../components/SquaredCard'),
  },
  data(){
    return {
      spotlights: [
        { topText: 'Sweet Spot', moreText: 'More Sweet Spot' },
        { topText: 'Events', moreText: 'More Events' },
        { topText: 'Nollywood', moreText: 'More Nollywood' },
        { topText: 'Nollywood', moreText: 'More Nollywood' },
      ]
    }
  }
}
</script>

<style scoped>
._bg-explore {
  background: #f4f4f4 !important;
  padding-top: 40px !important;
}
</style>