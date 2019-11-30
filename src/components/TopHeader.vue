<template>
  <div>
    <div class="top-header">
        <div class="logo">
        <i class="fas fa-video logo-icon"></i>
        <span class="logo-text">Film<span class="logo-part">Lab</span>
        </span>
        </div>
        <router-link to="cart">
            <i class="far fa-heart like-btn"></i> 
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TopHeader'
}
</script>

<style lang="scss">
    .top-header{
        max-width: 1640px;
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
        }
    }


</style>