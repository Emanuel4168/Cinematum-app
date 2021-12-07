import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [],
    favorites: [],
    genres: [],
    movie: {},
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },

    SET_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },

    SET_GENRES(state, genres) {
      state.genres = genres;
    },

    SET_MOVIE_Detail(state, movie) {
      state.movie = movie;
    },
  },
  actions: {
    async getMovies({ commit }) {
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/films`;
      let response = await axios.get(url)
      commit('SET_MOVIES', response.data);
    },

    async getFavorites({ commit }) {
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/favorites`;
      let response = await axios.get(url);
      if (response === undefined) {
        commit('SET_FAVORITES', []);
        return;
      }
      commit('SET_FAVORITES', response.data);
      
      // axios
      //   .get(url)
      //   .then((response) => {
      //     if (response === undefined) {
      //       commit('SET_FAVORITES', []);
      //       return;
      //     }
      //     alert("llamada api:"+JSON.stringify(response.data))
      //     commit('SET_FAVORITES', response.data);
      //   })
      //   .catch((error) => console.log(error));
    },

    getGenres({ commit }) {
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/genres`;
      axios
        .get(url)
        .then((response) => {
          if (response === undefined) {
            commit('SET_GENRES', []);
            return;
          }
          console.log('campos mamahuevo', response.data);
          commit('SET_GENRES', response.data);
        })
        .catch((error) => console.log(error));
    },

    async deleteMovie({ commit }, id) {
      if (id == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/films/${id}`;
      let response = await axios.delete(url)
      // axios
      //   .delete(url)
      //   .then((response) => {})
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    async postFavorites({ commit }, favorite) {
      if (favorite == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/favorites`;
      let response = await axios.post(url, favorite)
      // axios
      //   .post(url, favorite)
      //   .then((response) => {})
      //   .catch((error) => console.log(error));
    },

    deleteFavorite({ commit }, id) {
      if (id == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/favorites/${id}`;
      axios
        .delete(url)
        .then((response) => {})
        .catch((error) => console.log(error));
    },

    postFilm({ commit }, film) {
      if (film == '') {
        return;
      }
      
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/films`;
      axios
        .post(url, film)
        .then((response) => {})
        .catch((error) => console.log(error));
    },

    getMovieById({ commit }, id) {
      if (id == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/films/${id}`;
      axios
        .get(url)
        .then((response) => {
          commit('SET_MOVIE_Detail', response.data);
        })
        .catch((error) => console.log(error));
    },

    getRandomMovie({ commit }) {
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/randomFilms`;
      axios
        .get(url)
        .then((response) => {
          commit('SET_MOVIE_Detail', response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
