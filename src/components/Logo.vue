<template>
  <div>
    <i class="fas fa-video logo-icon"></i>
    <span class="logo-text">Film<span class="logo-part">Lab</span>
    </span>
  </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style lang="scss">
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
</style>