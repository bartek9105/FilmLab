<template>
      <div>
        <section class="film-belt">
            <div class="film-container">
                <div v-for="film in films.slice(0, filmsToShow)" :key="film.id">
                    <router-link :to="'/film/' + film.id" class="film-item" >
                        <div class="img-container">
                            <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="film-img">
                            <div class="middle"></div>
                        </div>
                        <p>{{ film.title }}</p>
                    </router-link>
                    <i class="far fa-heart like-btn" @click="addFavourite(film)"></i>
                    <div>
                        <span class="release-date">{{ film.release_date }}</span>
                    </div>
                </div>
            </div>
            <button class="show-more-btn" @click="loadMore">
                See more
                <i class="fas fa-chevron-down"></i>
            </button>
        </section>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

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
        },
        ...mapMutations([
            'ADD_AND_REMOVE_FAVOURITE'
        ]),
        addFavourite(film){
            this.ADD_AND_REMOVE_FAVOURITE(film)
        }
    },
    mounted(){
        this.getSimilarAndRecommended();
    }
}
</script>

<style>

</style>