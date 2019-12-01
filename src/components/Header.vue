<template>
  <div>
    <header>
        <div class="header-top">
            <div class="logo">
                <i class="fas fa-video logo-icon"></i>
                <span class="logo-text">Film<span class="logo-part">Lab</span>
                </span>
            </div>
            <div class="cart">
                <i class="far fa-heart like-btn" @click="isHidden = !isHidden"></i> 
                <Cart v-if="!isHidden"/>
            </div>
        </div>
        <div class="header-content">
            <slot></slot>
        </div>
    </header>
  </div>
</template>

<script>

import Cart from '../components/Cart'

export default {
    name: 'Header',
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
    .header-top{
        width: 90%;
        margin: 0 auto;
        padding: 30px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        .cart-btn{
            .like-btn{
                color: #fff;
                text-decoration: none;
                cursor: pointer;
            }
        }

    }
    .header-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>