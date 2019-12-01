<template>
  <div>
        <Header>
        <div class="single-details" v-for="film in singleFilmDetails">
            <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="poster">
            <p>{{ film.title }}</p>
        </div>
        </Header>
  </div>
</template>

<script>
    const API_KEY = process.env.VUE_APP_API_KEY

    import Header from '../components/Header'
    export default {
        components: {
            Header
        },
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

<style lang="scss" scoped>

</style>