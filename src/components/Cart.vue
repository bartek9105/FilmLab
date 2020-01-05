<template>
    <div class="cart">
        <ul class="cart-list">
            <p v-if="favourites.length == 0">
                Cart is empty
            </p>
            <li v-else v-for="(favourite, index) in favourites" :key="index">
                <router-link :to="'film/' + favourite.id">
                    <img :src="'http://image.tmdb.org/t/p/w92' + favourite.poster_path" alt="favourite.title" class="cart-poster">
                    <div class="col">
                        <span class="title">{{ favourite.title }}</span>
                        <span class="date">{{ favourite.release_date }}</span>
                        <button class="delete-btn">Delete</button>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: 'Cart',
    data(){
        return{

        }
    },
    computed: {
        ...mapState([
            'favourites'
        ])
    },
    methods: {
    }
}
</script>

<style lang="scss">
    .cart-list{
        width: 250px;
        background-color: #fff;
        list-style: none;
        color: #000;
        opacity: .9;
        border-radius: 3px;
        padding: 40px 32px;
        font-size: 13px;
        position: absolute;
        right: 7px;
        top: 15px;
        z-index: 1;
        p{
            text-align: center;
        }
        li{
            display: flex;
            margin-bottom: 30px;
            .col{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title{
                    overflow: hidden;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 200px;
                }
                .date{
                    font-size: 11px;
                }
                    .delete-btn{
                        font-size: 13px;
                        border: none;
                        background-color: transparent;
                        cursor: pointer;
                        text-align: left;
                    }
            }
            .cart-poster{
                height: 70px;
                border-radius: 3px;
                margin-right: 25px;
            }
        }

    }
</style>