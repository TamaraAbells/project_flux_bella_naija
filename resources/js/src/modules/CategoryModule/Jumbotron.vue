<template>
  <div>
    <div class="flex flex-col gap-10 px-16 pt-10 h-full">
      <div class="w-full flex flex-row justify-center items-start gap-5 border-b border-gray-100">
        <div class="basis-1/4">
          <RecentComments />
        </div>
        <div class="flex flex-col justify-center gap-7 basis-1/2" >
          <div class="relative" style="width:550px">
            <img style="width:700px; height:500px"
              :src="require('../../assets/GLITZ-560x600.jpg')" />
            <div class="absolute bottom-0 __gardient-class pb-5 pt-16 px-3">
              <h2 class="text-2xl text-white font-semibold">
                See The Full Schedule For Glitz Africa Fashion Week 2022
              </h2>
            </div>
          </div>
          <div>
            <img style="width:600px; height:300px"
              :src="require('../../assets/pexels-monstera-9490629-2-560x426.jpg')" />
            <div class="py-1">
              <h2 class="text-2xl text-black font-semibold">
                How the Private Sector can Help Students During ASUU Strike
              </h2>
            </div>
          </div>
        </div>
        <div class="basis-1/4">
          <RecentPosts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    RecentPosts: () => import('../../components/RecentPosts'),
    RecentComments: () => import('../../components/RecentComments'),
  }
}
</script>

<style scoped>
.__gardient-class {
  background-image: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.6) 50%,rgba(0,0,0,.9) 100%);
}
._hero-class {
  width: 50vw !important;
}
</style>