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


            <section class="movies">
                <h1 v-show="store.movieList.length > 0">
                    Film trovati: {{ store.movieList.length }}
                </h1>

                <div class="wrapper-card flex">
                    <Movies v-for="movie in store.movieList" :originalTitle="movie.original_title" :title="movie.title"
                        :star="movie.vote_average" :image="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
                        :language="movie.original_language" />
                </div>
            </section>

            <section class=" tv-shows">
                <h1 v-show="store.tvShows.length > 0">
                    Serie Tv trovati: {{ store.tvShows.length }}
                </h1>

                <div class="wrapper-card flex">
                    <Movies v-for="tvShow in store.tvShows" :originalTitle="tvShow.original_name"
                        :star="tvShow.vote_average" :image="'https://image.tmdb.org/t/p/w342/' + tvShow.poster_path"
                        :language="tvShow.original_language" />
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

.wrapper-card {
    flex-wrap: wrap;
    margin-bottom: 2rem;
}
</style>