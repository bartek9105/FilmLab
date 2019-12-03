<template>
    <div class="cart">
        <ul>
            <li v-for="(favourite, index) in favourites" :key="index">
                <img :src="'http://image.tmdb.org/t/p/w92' + favourite.poster_path" alt="favourite.title" class="cart-poster">
                <div class="col">
                    <span class="title">{{ favourite.title }}</span>
                    <span class="date">{{ favourite.release_date }}</span>
                    <button @click="deleteFavourite(index)" class="delete-btn">Delete</button>
                </div>
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
        ...mapActions([
            'removeFavourite'
        ]),
        deleteFavourite(index){
            this.removeFavourite(index)
        }
    }
}
</script>

<style lang="scss">
    ul{
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
        li{
            display: flex;
            margin-bottom: 30px;
            .col{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .date{
                    font-size: 11px;
                }
                    .delete-btn{
                        font-size: 13px;
                        border: none;
                        background-color: transparent;
                        cursor: pointer;
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