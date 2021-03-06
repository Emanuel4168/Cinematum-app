const express = require('express');

const routes = express.Router();

const FilmController = require('../controllers/FilmController');

routes.get('/films', FilmController.getFilms);
routes.get('/test', FilmController.test);
routes.get('/films/:id', FilmController.getFilmById);
routes.get('/randomFilms', FilmController.getRandomFilm);
routes.post('/films', FilmController.postFilm);
routes.put('/films', FilmController.putFilm);
routes.delete('/films/:id', FilmController.deleteFilm);

module.exports = routes;