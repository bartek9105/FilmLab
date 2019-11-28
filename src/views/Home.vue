<template>
  <div class="home">
      <header>
        <TopHeader/>
        <div class="header-section">
          <h1>Search for your favourite films in our library</h1>
          <form class="form-control" @submit.prevent="getResults()">
            <input type="text" v-model="searchQuery">
            <button type="submit">Search</button>
          </form>
        </div>
      </header>

      <section class="main">
        <router-link :to="'/film/' + film.id" class="film-item" v-for="film in filmDetails" :key="film.id">
          <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster">
          <p>{{ film.title }} Like </p>
        </router-link>
      </section>

      <section class="belts">
        <h2>Popular</h2>
        <Popular type="popular"/>

        <h2>Upcoming</h2>
        <Popular type="upcoming"/>

        <h2>Top rated</h2>
        <Popular type="top_rated"/>
      </section>

  </div>
</template>

<script>
  const API_KEY = process.env.VUE_APP_API_KEY
  const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`
  
  import Popular from '../components/Popular'
  import TopHeader from '../components/TopHeader'

  export default {
    name: 'Home',
    components: {
      Popular,
      TopHeader
    },
    data(){
      return{
        searchQuery: '',
        filmDetails: [],
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
      }
    }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }
  header{
    height: 526px;
    background-color: rgb(138, 87, 0);
      .header-section{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        h1{
          margin-bottom: 58px;
          font-size: 39px;
        }
        .form-control{
          display: flex;
          flex-direction: column;
          align-items: center;
          input{
            width: 680px;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 5%;
            margin-bottom: 50px;
            height: 40px;
          }
          button{
            width: 180px;
            height: 47px;
            background-color: #FFA200;
            border: none;
            color: #fff;
            cursor: pointer;
          }
        }
      }
  }
  h2{
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 28px;
  }
  .belts{
    max-width: 1640px;
    margin: 0;
    padding: 72px 20px;
  }
</style>
