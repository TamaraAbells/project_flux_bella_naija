<template>
  <div>
    <Jumbotron />
  </div>
</template>

<script>
export default {
  components: {
    Jumbotron: () => import('./Jumbotron'),
  }
}
</script>