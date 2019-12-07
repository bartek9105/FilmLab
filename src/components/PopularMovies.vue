<template>
    <div>
        <section class="film-belt">
            <div v-for="(film, index) in films.slice(0, filmsToShow)" :key="index">
                <router-link :to="'/film/' + film.id" class="film-item" >
                    <div class="img-container">
                        <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="film-img">
                        <div class="middle"></div>
                    </div>
                    <p>{{ film.title }}</p>
                </router-link>
                <i class="far fa-heart like-btn" :class="{liked: 'likeBtn'}" @click="addFavourite(film)"></i>
                <div class="film-details">
                    {{ film.release_date }}
                </div>
            </div>
            <button @click="loadMore">Show more</button>
        </section>
    </div>
</template>

<script>

import { mapState, mapMutations} from 'vuex'

export default {
    name: 'PopularMovies',
    props: ['type'],
    data(){
        return{
            films: [],
            filmsToShow: 6,
            selectedFilm: null,
            liked: false
        }
    },
    methods: {
        loadMore(){
            this.filmsToShow += 6;
        },
        ...mapMutations([
            'ADD_FAVOURITE'
        ]),
        addFavourite(film){
            this.ADD_FAVOURITE(film)
        },
        async getPopular(){
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.type}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`)
            const data = await res.json();
            data.results.forEach(item => {
                this.films.push(item)
            })
            this.films.map(item => {
                item.release_date = [...item.release_date].slice(0,4).join('');
            })
        }
    },
    mounted(){
        this.getPopular()
    },

}
</script>

<style lang="scss">
    .custom-toast{
        background-color: #FFA200 !important;
    }
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
            transition: ease-in-out .2s;
            &:hover{
                color: #FFA200;
            }
            p{
                display: block;
                width: 180px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .img-container{
                position: relative;
                &:hover .film-img{
                    opacity: .3;
                }
                &:hover .middle{
                    opacity: 1;
                }
                .film-img{
                    margin-bottom: 36px;
                    opacity: 1;
                    display: block;
                    height: auto;
                    transition: .3s ease-in-out;
                    backface-visibility: hidden;
                }
                .middle{
                    transition: .5s ease;
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    text-align: center;
                }
            }
        }
        .like-btn{
            cursor: pointer;
            transition: ease-in-out .2s;
            padding: 10px 0;
            &:hover{
                color: #FFA200;
            }
        }
        .likedBtn{
            color: #FFA200;
        }
    }
</style>