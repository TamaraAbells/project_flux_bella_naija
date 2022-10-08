<template>
  <div class="flex flex-col gap-5">
    <Jumbotron />
    <PostSection />
  </div>
</template>

<script>
export default {
  components: {
    Jumbotron: () => import('./Jumbotron'),
    PostSection: () => import('./PostSection'),
  }
}
</script>