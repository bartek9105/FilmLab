<template>
  <div class="home">
      <header>
        <TopHeader/>
        <div class="header-section">
          <h1>Search for your favourite films in our library</h1>
          <form class="form-control" @submit.prevent="getResults()">
            <input type="text" v-model="searchQuery" placeholder="Enter film title">
            <button type="submit">Search</button>
          </form>
        </div>
      </header>

      <section class="main">
        <router-link :to="'/film/' + film.id" class="film-item" v-for="film in filmDetails" :key="film.id">
          <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster">
            <p>{{ film.title }}</p>
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
        try{
          this.filmDetails = [];
          const results = await fetch(`${API_URL_SEARCH}${this.searchQuery}`)
          const data = await results.json();
          data.results.forEach(item => {
            this.filmDetails.push(item)
          })
        }catch(error){
          console.log(error);
        }
        this.searchQuery = ''
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
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  header{
    height: 500px;
    background-image: url('../assets/header-banner.jpg');

      .header-section{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding-top: 30px;
        h1{
          margin-bottom: 58px;
          font-size: 35px;
        }
        .form-control{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 10px;
          input{
            width: 500px;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid rgb(163, 163, 163);
            margin-bottom: 50px;
            height: 30px;
            color: #fff;
            outline: none;
            transition: ease-in-out .2s;
            &:focus{
              border-bottom: 1px solid rgb(255, 255, 255);
            }
            &::placeholder{
              color: #fff;
              opacity: .5;

            }
          }
          button{
            width: 180px;
            height: 47px;
            background-color: #FFA200;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 18px;
            font-weight: 700;
            border-radius: 5px;
            transition: .2s ease-in-out;
              &:hover{
                background-color: rgb(211, 134, 0);
              }
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
