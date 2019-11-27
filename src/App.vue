<template>
  <div id="app">
    <header>
      <nav>
        <a>test</a>
        <a>logo</a>
      </nav>
    </header>
    <router-view/>
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
</style>
