<script>
import axios from 'axios'
import { store } from '../store.js'


export default {
  name: 'AppHeader',
  data() {
    return {
      store,
      api_uri: 'https://api.themoviedb.org/3/search/movie',
      api_key: '0790ff9b10b8f555370ac1d91a5acdb6'
    }
  },
  methods: {
    getMovies(searchMovies) {
      axios.get(this.api_uri, {
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
    }
  }

}
</script>

<template>
  <header>
    <div class="container">
      <h1>
        BOOLFLIX
      </h1>

      <div class="search">
        <input type="text" v-model="store.searchMovie">
        <button @click="getMovies(store.searchMovie)">cerca</button>
        <!--End Div Search-->
      </div>

      <!--End Div Container-->
    </div>
    <!--End Header-->
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

header {
  background-color: $main-bg-color;
}

.container {
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;


  h1 {
    color: $main-color;
  }
}

.search {
  display: flex;
  align-items: center;

  input {
    padding: 1rem;
    margin-right: 1rem;
  }

  button {
    padding: 1rem;
    font-size: 1.2rem;
  }
}
</style>