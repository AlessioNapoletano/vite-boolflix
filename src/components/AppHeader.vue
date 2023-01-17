<script>
import { store } from '../store.js'
import axios from 'axios'

export default {
  name: 'AppHeader',

  data() {
    return {
      store,
      api_uri_Tv_Shows: 'https://api.themoviedb.org/3/search/tv',
      api_uri_movie: 'https://api.themoviedb.org/3/search/movie',
      api_key: '0790ff9b10b8f555370ac1d91a5acdb6'
    }
  },

  methods: {
    getTvShows(searchTvShows) {
      axios.get(this.api_uri_Tv_Shows, {
        params: {
          api_key: this.api_key,
          query: searchTvShows
        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.store.tvShows = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })

    },

    getMovies(searchMovies) {
      axios.get(this.api_uri_movie, {
        params: {
          api_key: this.api_key,
          query: searchMovies
        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.store.movieList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    },

    getApi(search) {
      this.getTvShows(search);
      this.getMovies(search);
    }
  }

}
</script>

<template>
  <header>
    <div class="container">
      <div class="title">
        <h1>
          BOOLFLIX
        </h1>
      </div>

      <div class="search">
        <input type="text" v-model="store.search" @keyup.enter="getApi(store.search)" placeholder="Cerca">
        <button @click="getApi(store.search)">cerca</button>
        <!--End Div Search-->
      </div>

      <!--End Div Container-->
    </div>
    <!--End Header-->
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

header {
  background-color: $main-bg-color;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $main-color;
  }
}

.search {
  display: flex;
  align-items: center;

  input {
    padding: .5rem;
    margin-right: 1rem;
  }

  button {
    padding: .5rem;
    font-size: 1.2rem;
  }
}
</style>