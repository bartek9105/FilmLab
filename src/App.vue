<template>
  <div id="app">
    <header>
      <nav>
        <a>test</a>
        <a>logo</a>
      </nav>
      <h1>Search for your favourite films</h1>
      <form class="form-control" @submit.prevent="getResults()">
        <input type="text" v-model="searchQuery">
        <button type="submit">Search</button>
      </form>
    </header>

    <router-view/>
  </div>
</template>

<script>
  const API_KEY = '804c3863f43ac032ec694ff81f291705'
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`

  import Home from './views/Home'

  export default {
    components: {
      Home
    },
    data(){
      return{
        searchQuery: '',
        filmDetails: []
      }
    },
    methods: {
      async getResults(){
        const results = await fetch(`${API_URL}${this.searchQuery}`)
        const data = await results.json();
        this.filmDetails.push(data.results)
      }
    }
  }
</script>

<style lang="scss">

</style>
