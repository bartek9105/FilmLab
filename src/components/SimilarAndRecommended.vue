<template>
      <section class="film-belt">
        <div v-for="film in films.slice(0, filmsToShow)" :key="film.id">
            <router-link :to="'/film/' + film.id" class="film-item" >
                <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="film-img">
                <p>{{ film.title }}</p>
            </router-link>
            <i class="far fa-heart like-btn" @click="addFavourite(film)"></i>
            <div class="film-details">
                {{ film.release_date }}
            </div>
        </div>
        <button @click="loadMore">Show more</button>
    </section>
</template>

<script>

const API_KEY = process.env.VUE_APP_API_KEY

export default {
    name: 'SimilarAndRecommended',
    props: ['type'],
    data(){
        return{
            films: [],
            filmsToShow: 6,
            API_URL: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/${this.type}?api_key=${API_KEY}&language=en-US&page=1`
        }
    },
    methods: {
        loadMore(){
            this.filmsToShow += 6;
        },
        async getSimilarAndRecommended(){
            const res = await fetch(this.API_URL)
            const data = await res.json()
            data.results.forEach(item => {
                this.films.push(item)
            })
        }
    },
    mounted(){
        this.getSimilarAndRecommended();
    }
}
</script>

<style>

</style>