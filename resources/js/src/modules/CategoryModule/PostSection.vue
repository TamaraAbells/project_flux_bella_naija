<template>
  <div class="px-10">
    <div class="inline-flex justify-center items-center w-full">
      <hr class="my-8 w-full h-1.5 bg-red-500 border-0">
      <div class="absolute px-4 bg-white -translate-x-1/2">
      <h1 class="text-2xl uppercase font-black">NEW POSTS</h1>
      </div>
    </div>
    <div class="flex flex-row justify-between gap-10">
      <div>
        <div v-for="item, i in Array(6).fill()" :key="i" class="py-2">
          <NewPostsCard />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="py-2">
          <RecentComments />
        </div>
        <div class="py-2">
          <RecentPosts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    NewPostsCard: () => import('../../components/NewPostsCard'),
    RecentComments: () => import('../../components/RecentComments'),
    RecentPosts: () => import('../../components/RecentPosts')
  }
}
</script>