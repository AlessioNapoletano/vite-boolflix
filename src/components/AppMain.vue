<script>
import { store } from '../store.js'
import Movies from './Movies.vue';

export default {
    name: 'AppMain',

    data() {
        return {
            store,
        }
    },

    methods: {
        //https://image.tmdb.org/t/p/w342/nxbQLpCm78w5UHOyLrnkFJVCY7p.jpg
    },

    created() {
    }
}
</script>

<template>
    <main>
        <div class="container">
            <section class="no-content" v-show="(store.movieList.length || store.tvShows.length) === 0">
                <h1>
                    i risultati del film richiesto appariranno qui
                </h1>
            </section>

            <section class="movies">
                <h1 v-show="store.movieList.length > 0">
                    Film
                </h1>
                <div class="wrapper-card">
                    <div class="card" v-for="movie in store.movieList">

                        <img :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" alt="">
                        <h2>
                            Titolo Originale {{ movie.original_title }}
                        </h2>

                        <h4>
                            Titolo: {{ movie.title }}
                        </h4>

                        <p>
                            Lingua: {{ movie.original_language }}
                        </p>

                        <p>
                            voto: {{ movie.vote_average }}
                        </p>
                    </div>
                </div>
            </section>

            <section class="tv-shows">
                <h1 v-show="store.tvShows.length > 0">
                    Serie Tv
                </h1>

                <div class="wrapper-card">
                    <div class="card" v-for="tvShow in store.tvShows">
                        <div class="show">
                            <img :src="'https://image.tmdb.org/t/p/w342/' + tvShow.poster_path" alt="">
                        </div>

                        <div class="hide">
                            <h2>
                                Titolo Originale: {{ tvShow.original_name }}
                            </h2>

                            <p>
                                Lingua: {{ tvShow.original_language }}
                            </p>

                            <p>
                                Voto: {{ tvShow.vote_average }}
                            </p>
                        </div>

                    </div>
                </div>

            </section>

        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.wrapper-card {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .card {
        width: 400px;
        height: auto;
        margin-bottom: 2rem;
    }
}

main {
    padding-top: 3rem;

    //background-color: $secondary-bg-color;
    h1 {
        color: grey;
        font-size: 3rem;
        text-align: center;
        margin-bottom: 3rem;
    }

    li {
        margin-bottom: 1rem;
    }
}
</style>