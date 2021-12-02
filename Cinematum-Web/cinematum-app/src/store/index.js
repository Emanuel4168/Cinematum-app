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
    getMovies({ commit }) {
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/films`;
      axios
        .get(url)
        .then((response) => {
          if (response === undefined) {
            commit('SET_MOVIES', []);
            return;
          }
          commit('SET_MOVIES', response.data);
        })
        .catch((error) => console.log(error));
    },

    getFavorites({ commit }) {
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/favorites`;
      axios
        .get(url)
        .then((response) => {
          if (response === undefined) {
            commit('SET_FAVORITES', []);
            return;
          }
          commit('SET_FAVORITES', response.data);
        })
        .catch((error) => console.log(error));
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

    deleteMovie({ commit }, id) {
      if (id == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/films/${id}`;
      axios
        .delete(url)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    },

    postFavorites({ commit }, favorite) {
      if (favorite == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/favorites`;
      axios
        .post(url, favorite)
        .then((response) => {})
        .catch((error) => console.log(error));
    },

    deleteFavorite({ commit }, id) {
      if (id == '') {
        return;
      }
      let baseUrl = 'http://localhost:3000';
      let url = `${baseUrl}/favorites/${id}`;
      alert(url);
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
  },
  modules: {},
});
