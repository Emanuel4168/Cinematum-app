const express = require('express');

const routes = express.Router();

const FavoritesController = require('../controllers/FavoritesController');

routes.get('/favorites', FavoritesController.getFavorites);
routes.delete('/favorites/:id', FavoritesController.deleteFavorites);
routes.post('/favorites', FavoritesController.postFavorite);

module.exports = routes;