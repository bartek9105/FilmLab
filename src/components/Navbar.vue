<template>
  <div>
    <div class="header-top">
        <router-link to="/">
            <div class="logo-container">
                <Logo/>
            </div>
        </router-link>
        <div class="cart">
            <i class="fas fa-heart cart-btn" @click="isHidden = !isHidden"></i> 
            <div class="cart-count">{{ favourites.length }}</div>
            <Cart v-if="!isHidden"/>
        </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

import Cart from '../components/Cart'
import Logo from '../components/Logo'

export default {
    name: 'Navbar',
    components: {
        Cart,
        Logo
    },
    data(){
        return{
            isHidden: true
        }
    },
    computed: {
        ...mapState([
            'favourites'
        ])
    }
}
</script>

<style lang="scss">
    .header-top{
        position: absolute;
        top: 0;
        left: 0;
        width: 90%;
        margin: 0 auto;
        padding: 30px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo-container{
            display: flex;
            align-items: center;
        }
        .cart{
            position: relative;
            .cart-btn{
                position: relative;
                color: #fff;
                text-decoration: none;
                cursor: pointer;
                transition: .3s ease-in-out;
                &:hover{
                    color: #FFA200;
                }
            }
            .cart-count{
                position: absolute;
                font-size: 13px;
                top: -5px;
                right: -10px;
            }
        }

    }

</style>