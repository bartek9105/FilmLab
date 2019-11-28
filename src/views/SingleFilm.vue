<template>
  <div>
      <div class="single-details" v-for="film in singleFilmDetails">
          <p>{{ film.title }}</p>
      </div>
  </div>
</template>

<script>
    const API_KEY = process.env.VUE_APP_API_KEY


    export default {
        data(){
            return{
                singleFilmDetails: [],
                API_URL: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${API_KEY}&language=en-US`
            }
        },
        async mounted(){
            const res = await fetch(this.API_URL)
            const details = await res.json();
            this.singleFilmDetails.push(details)
        }
    }
</script>

<style>

</style>