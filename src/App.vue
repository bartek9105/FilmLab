<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
  import Home from './views/Home'

  export default {
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  .main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  body{
    background-color: #0F1014;
  }
</style>
