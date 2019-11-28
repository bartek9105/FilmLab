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
      <section class="popular">
        <h2>Popular</h2>
        <router-link :to="'/film/' + popularFilm.id" class="film-item" v-for="popularFilm in popularFilms.slice(0, filmsToShow)" :key="popularFilm.id">
          <img :src="'http://image.tmdb.org/t/p/w185'+popularFilm.poster_path" alt="poster">
          <p>{{ popularFilm.title }}</p>
        </router-link>
        <button @click="loadMore">Show more</button>
      </section>
  </div>
</template>



<script>
  const API_KEY = process.env.VUE_APP_API_KEY
  const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`
  const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

  import SingleFilm from './SingleFilm'

  export default {
    name: 'Home',
    data(){
      return{
        searchQuery: '',
        filmDetails: [],
        popularFilms: [],
        filmsToShow: 6
      }
    },
    methods: {
      async getResults(){
        this.filmDetails = [];
        const results = await fetch(`${API_URL_SEARCH}${this.searchQuery}`)
        const data = await results.json();
        data.results.forEach(item => {
          this.filmDetails.push(item)
        })
      },
      loadMore(){
        this.filmsToShow += 6;
      }
    },
    async mounted(){
      const res = await fetch(API_URL_POPULAR)
      const popularData = await res.json();
      popularData.results.forEach(item => {
        this.popularFilms.push(item)
      })

    }
  }
</script>

<style lang="scss" scoped>
  .popular{
    display: flex;
    flex-wrap: wrap;
  }
</style>
