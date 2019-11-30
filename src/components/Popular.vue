<template>
    <div>
    <section class="film-belt">
        <router-link :to="'/film/' + film.id" class="film-item" v-for="film in films.slice(0, filmsToShow)" :key="film.id">
            <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="film-img">
            <div class="film-title-like">
                <p>{{ film.title }}</p>
                <i class="far fa-heart like-btn"></i>
            </div>
            <div class="film-details">
                {{ film.release_date }}
            </div>
        </router-link>
        <button @click="loadMore">Show more</button>
    </section>
    </div>
</template>

<script>
import { log } from 'util';

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
      this.films.map(item => {
        item.release_date = [...item.release_date].slice(0,4).join('');
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
            .film-img{
                margin-bottom: 36px;
            }
            .film-title-like{
                display: flex;
                justify-content: space-between;
                .like-btn{
                    opacity: .4;
                }
            }
        }

    }
</style>