<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';
import Movies from './Movies.vue'

export default {
    name: 'AppMain',

    components: {
        LangFlag,
        Movies
    },

    data() {
        return {
            store,
        }
    },

    methods: {
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
                    i risultati della ricerca appariranno qui
                </h1>
            </section>

            <!-- <Movies v-for="movie in store.movieList" :originalTitle="movie.original_title" :title="movie.title" /> -->

            <section class="movies">
                <h1 v-show="store.movieList.length > 0">
                    Film trovati: {{ store.movieList.length }}
                </h1>

                <div class="wrapper-card flex">
                    <div class="card" v-for="movie in store.movieList">
                        <div class="image">
                            <img :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
                                :alt="store.movieList.title">
                        </div>

                        <div class="description">
                            <h2>
                                Titolo Originale: {{ movie.original_title }}
                            </h2>

                            <h4>
                                Titolo: {{ movie.title }}
                            </h4>

                            <p>
                                Lingua: <lang-flag :iso="movie.original_language" />
                            </p>

                            <p>
                                voto numerico: {{ movie.vote_average }}
                            </p>

                            <br>

                            <div class="star flex">
                                <p>
                                    Stelle:
                                </p>
                                <p v-for="n in (Math.floor(movie.vote_average / 2))">
                                    <i class="fa-solid fa-star"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class=" tv-shows">
                <h1 v-show="store.tvShows.length > 0">
                    Serie Tv trovati: {{ store.tvShows.length }}
                </h1>

                <div class="wrapper-card flex">
                    <div class="card" v-for="tvShow in store.tvShows">
                        <div class="image">
                            <img :src="'https://image.tmdb.org/t/p/w342/' + tvShow.poster_path" alt="">
                        </div>

                        <div class="description">
                            <h2>
                                Titolo Originale: {{ tvShow.original_name }}
                            </h2>

                            <h4>
                                Titolo: {{ tvShow.title }}
                            </h4>

                            <p>
                                Lingua: <lang-flag :iso="tvShow.original_language" />
                            </p>

                            <p>
                                voto numerico: {{ tvShow.vote_average }}
                            </p>

                            <br>

                            <div class="star flex">
                                <p>
                                    Stelle:
                                </p>
                                <p v-for="n in (Math.floor(tvShow.vote_average / 2))">
                                    <i class="fa-solid fa-star"></i>
                                </p>
                            </div>
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

h1 {
    color: grey;
    font-size: 3rem;
    text-align: center;
    margin: 3rem 0;
}

.flex {
    display: flex;
}

i {
    color: yellow;
}

.wrapper-card {
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .card {
        width: calc((100% / 6) - .5rem);
        height: 350px;
        margin-right: .5rem;
        margin-bottom: 2rem;
        border: 1px solid white;
        background-color: black;

        &:hover .image {
            display: none;
        }


        .image {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .description {
            display: none;
            color: white;
            padding: .5rem;
        }

        &:hover .description {
            display: block;
        }
    }
}
</style>