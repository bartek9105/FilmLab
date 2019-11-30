<template>
  <div>
    <div class="top-header">
        <div class="logo">
        <i class="fas fa-video logo-icon"></i>
        <span class="logo-text">Film<span class="logo-part">Lab</span>
        </span>
        </div>
        <i class="far fa-heart like-btn" @click="isHidden = !isHidden"></i> 
        <Cart v-if="!isHidden"/>
    </div>
  </div>
</template>

<script>

import Cart from '../components/Cart'

export default {
    name: 'TopHeader',
    components: {
        Cart
    },
    data(){
        return{
            isHidden: true
        }
    }
}
</script>

<style lang="scss">
    .top-header{
        width: 90%;
        margin: 0 auto;
        padding: 50px 20px;
        .logo{
            display: flex;
            align-items: center;
            .logo-icon{
                color: #fff;
                padding: 6px;
                background-color: #FFA200;
                border-radius: 50%;
                margin-right: 20px;
            }
            .logo-text{
                font-size: 25px;
                font-weight: 700;
                color: #fff;
                .logo-part{
                    color: #FFA200;
                }
            }
        }
        .like-btn{
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    }


</style>