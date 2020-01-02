<template>
  <div>
    <div class="header-top">
        <router-link to="/">
            <div class="logo-container">
                <Logo/>
            </div>
        </router-link>
        <div class="cart">
            <i class="fas fa-heart like-btn" @click="isHidden = !isHidden"></i> 
            <Cart v-if="!isHidden"/>
        </div>
    </div>
  </div>
</template>

<script>

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
    }
}
</script>

<style lang="scss">
    .header-top{
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
            .like-btn{
                color: #fff;
                text-decoration: none;
                cursor: pointer;
            }
        }

    }

</style>