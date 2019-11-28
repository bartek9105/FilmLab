<template>
    <div>
    <section class="film-belt">
        <router-link :to="'/film/' + film.id" class="film-item" v-for="film in films.slice(0, filmsToShow)" :key="film.id">
            <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="film-img">
            <p>{{ film.title }}</p>
        </router-link>
        <button @click="loadMore">Show more</button>
    </section>
    </div>
</template>

<script>

export default {
    name: 'Popular',
    props: ['type'],
    data(){
        return{
            films: [],
            filmsToShow: 6
        }
    },
    async mounted(){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.type}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`)
      const data = await res.json();
      data.results.forEach(item => {
        this.films.push(item)
      })
    },
    methods: {
        loadMore(){
            this.filmsToShow += 6;
        }
    }

}
</script>

<style lang="scss">
    .film-belt{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 72px;
        .film-item{
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 15px;
        }
        .film-img{
            margin-bottom: 36px;
        }
    }
</style>