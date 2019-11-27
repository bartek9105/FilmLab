<template>
  <div class="home">
      <form class="form-control" @submit.prevent="getResults()">
        <input type="text" v-model="searchQuery">
        <button type="submit">Search</button>
      </form>
      <section class="main">
        <router-link :to="'/film/' + film.id" class="film-item" v-for="film in filmDetails" :key="film.id">
          <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster">
          <p>{{ film.title }}</p>
        </router-link>
      </section>
  </div>
</template>

<script>
  const API_KEY = process.env.VUE_APP_API_KEY
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`

  import SingleFilm from './SingleFilm'

  export default {
    name: 'Home',
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
