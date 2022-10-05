<template>
  <div>
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import('./components/Navigation')
  }
}
</script>

<style>

</style>
