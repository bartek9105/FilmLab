<template>
    <div>
        <ul>
            <li v-for="(favourite, index) in favourites" :key="index">
                {{ favourite.title }}
            </li>
        </ul>
    </div>
</template>

<script>

import {mapState} from 'vuex'

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
    }
}
</script>

<style>

</style>