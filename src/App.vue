<template>
  <div id="app">
    <header>
      <nav>
        <a>test</a>
        <a>logo</a>
      </nav>

      <form class="form-control" @submit.prevent="getResults()">
        <input type="text" v-model="searchQuery">
        <button type="submit">Search</button>
      </form>
    </header>
    <section class="main">
        <div class="film-item" v-for="film in filmDetails" :key="film.id">
          <p>{{ film.title }}</p>
          <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster">
        </div>
    </section>
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
        this.filmDetails = [];
        const results = await fetch(`${API_URL}${this.searchQuery}`)
        const data = await results.json();
        data.results.forEach(item => {
          this.filmDetails.push(item)
        })
      }
    }
  }
</script>

<style lang="scss">
  .main{
    display: flex;
    
  }
</style>
