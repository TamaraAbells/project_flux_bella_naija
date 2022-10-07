<template>
  <div class="flex flex-col gap-5">
    <Jumbotron />
    <SpotLight />
    <PostSection />
    <Explore />
    <MoreFunStuff />
  </div>
</template>

<script>
export default {
  components: {
    Jumbotron: () => import('./Jumbotron'),
    SpotLight: () => import('./SpotLight'),
    PostSection: () => import('./PostSection'),
    Explore: () => import('./Explore'),
    MoreFunStuff: () => import('./MoreFunStuff'),
  }
}
</script>