const express = require('express');

const routes = express.Router();

const GenreController = require('../controllers/GenreController');

routes.get('/genres', GenreController.listarGeneros);
routes.delete('/genres/:id', GenreController.deleteGenre);
routes.post('/genres', GenreController.createGenre);

module.exports = routes;