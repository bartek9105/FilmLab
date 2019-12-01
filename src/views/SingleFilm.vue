<template>
  <div> 
    <div class="container" v-for="film in singleFilmDetails">
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

            <h5>Overview</h5>
            <p>{{ film.overview }}</p>

            <section class="belts">
                <h5>Similar</h5>
                <Popular type="similar"/>
            </section>
        </section>
    </div>
  </div>
</template>

<script>
    const API_KEY = process.env.VUE_APP_API_KEY

    import Navbar from '../components/Navbar'
    import Popular from '../components/Popular'
    export default {
        components: {
            Navbar,
            Popular
        },
        data(){
            return{
                singleFilmDetails: [],
                API_URL: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${API_KEY}&language=en-US`
            }
        },
        async mounted(){
            const res = await fetch(this.API_URL)
            const details = await res.json();
            this.singleFilmDetails.push(details)
        }
    }
</script>

<style lang="scss" scoped>
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
        h5{
            text-transform: uppercase;
            font-size: 20px;
            margin: 70px 0 35px 0;
        }
        .details-table{
            text-transform: uppercase;
            color: rgb(189, 189, 189);
            font-size: 13px;
            td{
                padding: 0 40px 30px 0;
            }
        }
        p{
            color: rgb(189, 189, 189);
            font-size: 13px;
        }
    }
</style>