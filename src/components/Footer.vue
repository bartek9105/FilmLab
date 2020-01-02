<template>
    <div>
        <footer>
            <div class="footer-container">
                <div class="logo">
                    <Logo/>
                </div>
                <nav class="footer-nav">
                    <ul class="footer-list">
                        <li>FAQ</li>
                        <li>Corporate Information</li>
                        <li>Help Center</li>
                        <li>Terms of Use</li>
                    </ul>
                </nav>
                <nav class="footer-nav">
                    <ul class="footer-list">
                        <li>Contact Us</li>
                        <li>Account</li>
                        <li>Privacy</li>
                        <li>Cookie preferences</li>
                    </ul>
                </nav>
                <div class="cat">
                    <p>Subscribe to our newsletter</p>
                    <form class="footer-form">
                        <input type="text" placeholder="Enter your e - mail">
                        <button>
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div class="social-icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            <p>Filmlab &#9400; All rights reserved. Powered by tmdb API.</p>

        </footer>
  </div>
</template>

<script>

import Logo from '../components/Logo'

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss">
    footer{
        max-width: 1020px;
        margin: 0 auto;
        .logo{
            display: flex;
            align-items: center;
        }
        .footer-container{
            font-size: 15px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 56px;
            .footer-nav{
                .footer-list{
                    list-style: none;
                    li{
                        margin-bottom: 15px;
                        cursor: pointer;
                        transition: .2s ease-in-out;
                        &:hover{
                            color: #FFA200;
                        }
                    }
                }
            }
            .cat{
                p{
                    font-size: 15px;
                }
                .footer-form{
                    margin-top: 30px;
                    margin-bottom: 41px;
                    input{
                        position: absolute;
                        background-color: transparent;
                        border: none;
                        outline: none;
                        color: #fff;
                        border-bottom: 1px solid rgb(202, 202, 202);
                        padding-bottom: 7px;
                        transition: .2s ease-in-out;
                        &:focus{
                            border-bottom: 1px solid #fff;
                        }
                    }
                    button{
                        position: relative;
                        top: 0;
                        left: 160px;
                        background-color: transparent;
                        border: none;
                        cursor: pointer;
                        outline: none;
                        i{
                            color: #FFA200;
                            transition: .2s ease-in-out;
                            &:hover{
                                color: rgb(199, 126, 0);
                            }
                        }
                    }
                }
            }
            .social-icons{
                i{
                    margin-right: 20px;
                    cursor: pointer;
                    transition: .2s ease-in-out;
                    &:hover{
                        color: #FFA200;
                    }
                }
            }
        }
        p{
            text-align: center;
            font-size: 13px;
            margin-bottom: 35px;
        }
    }
</style>