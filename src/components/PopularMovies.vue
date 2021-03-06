<template>
    <div>
        <section class="film-belt">
            <div class="film-container">
                <div v-for="(film, index) in films.slice(0, filmsToShow)" :key="index" class="film-card">
                    <router-link :to="'/film/' + film.id" class="film-item" >
                        <div class="img-container">
                            <img :src="'http://image.tmdb.org/t/p/w185'+film.poster_path" alt="poster" class="film-img">
                            <div class="middle"></div>
                        </div>
                        <p>{{ film.title }}</p>
                    </router-link>
                    <div>
                        <a href="#" @click.prevent="film.isLiked = !film.isLiked">
                            <i :class="['far', 'fa-heart', 'like-btn', {'likedBtn': film.isLiked}]" @click="addFavourite(film)"></i>
                        </a>
                        <div>
                            <span class="release-date">{{ film.release_date }}</span>
                        </div>
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

import { mapState, mapMutations} from 'vuex'

export default {
    name: 'PopularMovies',
    props: ['type'],
    data(){
        return{
            films: [],
            filmsToShow: 6,
        }
    },
    computed: {
        ...mapState([
            'favourites'
        ])
    },
    methods: {
        loadMore(){
            this.filmsToShow += 6;
        },
        ...mapMutations([
            'ADD_AND_REMOVE_FAVOURITE'
        ]),
        addFavourite(film){
            this.ADD_AND_REMOVE_FAVOURITE(film)
        },
        async getPopular(){
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.type}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`)
            const data = await res.json();
            data.results.forEach(item => {
                this.films.push(item)
            })
            this.films.map(item => {
                item.release_date = [...item.release_date].slice(0,4).join('')
                this.$set(item, 'isLiked', false)
            })
        }
    },
    mounted(){
        this.getPopular()
    },

}
</script>

<style lang="scss">
    .show-more-btn{
        font-size: 15px;
        color: #FFA200;
        text-transform: uppercase;
        border: none;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        outline: none;
        cursor: pointer;
        i{
            margin-top: 20px;
            font-size: 20px;
        }
    }
    .custom-toast{
        background-color: #FFA200 !important;
    }
    .film-belt{
        display: flex;
        flex-direction: column;
        padding-bottom: 72px;
        .film-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 60px;
            .film-card{

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
                        overflow: hidden;
                        .film-img{
                            transition: all 0.3s;
                        }
                        &:hover .film-img{
                            opacity: .3;
                            transform: scale(1.1);
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
                .release-date{
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 14px;
                }
                .like-btn{
                    cursor: pointer;
                    transition: ease-in-out .2s;
                    padding: 10px 0;
                    color: rgba(255, 255, 255, 0.4);
                    &:hover{
                        color: #FFA200;
                    }
                }
                .likedBtn{
                    color: #FFA200;
                }
            }

        }
    }
</style>