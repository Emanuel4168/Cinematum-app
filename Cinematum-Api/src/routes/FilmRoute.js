const express = require('express');

const routes = express.Router();

const FilmController = require('../controllers/FilmController');

routes.get('/films', FilmController.getFilms);
routes.get('/films/:id', FilmController.getFilmById);
routes.get('/randomFilms', FilmController.getRandomFilm);
routes.post('/films', FilmController.postFilm);
routes.put('/films', FilmController.putFilm);
routes.delete('/films', FilmController.deleteFilm);

module.exports = routes;