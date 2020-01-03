<template>
  <div> 
    <div class="container" v-for="film in filmDetails">
        <header>
            <Navbar/>
            <div class="single-details-header">
                <h2>{{ film.title }}</h2>
                <p>               
                    {{ film.runtime }} min
                    <i class="fas fa-circle dot"></i>
                    {{ film.production_countries[0].iso_3166_1 }}
                    <i class="fas fa-circle dot"></i>
                    {{ film.genres[0].name }}
                </p>
            </div>
        </header>
        <section class="details">
            <div class="container">
                <div class="left-section">
                    <div class="details-info">
                        <h5>Details</h5>
                        <table class="details-table">
                                <tr>
                                    <td>Genre</td>
                                    <td>{{ film.genres[0].name }}</td>
                                </tr>
                                <tr>
                                    <td>Original language</td>
                                    <td>{{ film.original_language }}</td>
                                </tr>
                                <tr>
                                    <td>Popularity</td>
                                    <td>{{ film.popularity }}</td>
                                </tr>
                                <tr>
                                    <td>Release date</td>
                                    <td>{{ film.release_date }}</td>
                                </tr>
                                <tr>
                                    <td>Runtime</td>
                                    <td>{{ film.runtime }} min</td>
                                </tr>
                                <tr>
                                    <td>Vote average</td>
                                    <td>{{ film.vote_average }}</td>
                                </tr>     
                                <tr>
                                    <td>Vote count</td>
                                    <td>{{ film.vote_count }}</td>
                                </tr>  
                        </table>
                    </div>
                    <div class="overview">
                        <h5>Overview</h5>
                        <p>{{ film.overview }}</p>
                    </div>
                    <div class="reviews">
                        <h5>Reviews</h5>
                        <carousel :perPage="1" :navigationEnabled="true" paginationColor="#999999" paginationActiveColor="#fff" class="reviews-carousel" navigationNextLabel="&#9835;">
                            <slide v-for="(review, index) in reviews[0]" class="slide">
                                <p class="review-text">
                                    {{ review.content }}
                                </p> 
                                <p class="review-author"> - {{ review.author }} </p>
                            </slide>
                        </carousel>
                    </div>
                </div>
                <div class="right-section">
                    <div class="trailer" v-for="video in videos">
                        <iframe width="672" height="368"
                        :src="'https://www.youtube.com/embed/' + video.key">
                        </iframe>
                    </div>
                </div>
            </div>
            <section class="propositions">
                <h5>Recommended if you like this movie</h5>
                <SimilarAndRecommended type="recommendations"/>
                <h5>Similar to this movie</h5>
                <SimilarAndRecommended type="similar"/>
            </section>
        </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
    const API_KEY = process.env.VUE_APP_API_KEY

    import { Carousel, Slide } from 'vue-carousel';

    import Navbar from '../components/Navbar'
    import PopularMovies from '../components/PopularMovies'
    import SimilarAndRecommended from '../components/SimilarAndRecommended'
    import Footer from '../components/Footer'

    export default {
        components: {
            Carousel,
            Slide,
            Navbar,
            PopularMovies,
            SimilarAndRecommended,
            Footer
        },
        data(){
            return{
                filmDetails: [],
                videos: [],
                reviews: [],
                API_URL_DETAILS: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${API_KEY}&language=en-US`,
                API_URL_VIDEOS: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${API_KEY}&language=en-US`,
                API_URL_REVIEWS: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
            }
        },
        methods: {
            getDetailsAndVideos(){
                Promise.all([
                    fetch(this.API_URL_DETAILS),
                    fetch(this.API_URL_VIDEOS),
                    fetch(this.API_URL_REVIEWS)
                ]).then(data => {
                    return Promise.all(data.map(el => el.json()));
                }).then((data) => {
                    this.filmDetails.push(data[0])
                    this.videos.push(data[1].results[0])
                    this.reviews.push(data[2].results)
                    
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },
        mounted(){
            this.getDetailsAndVideos();
        }
    }
</script>

<style lang="scss" scoped>
    h5{
        text-transform: uppercase;
        font-size: 20px;
        margin-bottom: 35px;
    }
    p{
        color: rgb(189, 189, 189);
        font-size: 13px;
        line-height: 1.7;
    }
    .review-text{
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 800px;
    }
    .review-author{
        margin-top: 30px;
        color: rgb(153, 153, 153)
    }
    .reviews-carousel{
        max-width: 800px;
    }
    .single-details-header{
        width: 90%;
        margin: 0 auto;
        height: calc(100% - 90px);
        display: flex;
        justify-content: center;
        flex-direction: column;
        .dot{
            font-size: 5px;
            padding: 8px;
        }
        p{
            display: flex;
            align-items: center;
            font-size: 13px;
            text-transform: uppercase;
        }
        h2{
            font-size: 35px;
        }
    }
    .details{
        width: 90%;
        margin: 0 auto;
        padding: 70px 0;
        .container{
            display: flex;
            justify-content: space-between;
                .left-section{
                    .details-info{
                        .details-table{
                            text-transform: uppercase;
                            color: rgb(189, 189, 189);
                            font-size: 13px;
                            td{
                                padding: 0 40px 30px 0;
                            }
                        }
                    }
                    .reviews{
                        margin: 35px 0;
                    }
                }
                .right-section{
                    .trailer{
                        iframe{
                            border: none;
                        }
                    }
                }
                .propositions{
                    margin-top: 70px;
                }
        }
    }
</style>