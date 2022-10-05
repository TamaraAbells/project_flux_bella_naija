<template>
  <div>
    <trending />
  </div>
</template>

<script>
export default {
  components: {
    Trending: () => import('../../components/Trending')
  }
}
</script>