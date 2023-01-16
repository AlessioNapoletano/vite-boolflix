<script>
import { store } from '../store.js'

export default {
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
            <h1 v-show="(store.movieList.length || store.tvShows.length) === 0">
                i risultati del film richiesto appariranno qui
            </h1>

            <h1 v-show="store.movieList.length > 0">
                Film
            </h1>
            <ul>
                <li v-for="movie in store.movieList">

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
                </li>
            </ul>

            <h1 v-show="store.tvShows.length > 0">
                Serie Tv
            </h1>

            <ul>
                <li v-for="tvShow in store.tvShows">
                    <h2>
                        Titolo Originale: {{ tvShow.original_name }}
                    </h2>

                    <p>
                        Lingua: {{ tvShow.original_language }}
                    </p>

                    <p>
                        Voto: {{ tvShow.vote_average }}
                    </p>
                </li>
            </ul>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

main {

    //background-color: $secondary-bg-color;
    h1 {
        color: grey;
        text-align: center;
    }

    li {
        margin-bottom: 1rem;
    }
}
</style>