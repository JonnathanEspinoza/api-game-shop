const express = require('express');
const router = express.Router();

const { list, create, read, remove, videogameById, photo} = require('../controllers/videogame.controller');

/**
 * The API routes of the videogames
 * @module API
 */
/**
 * @name GetVideogames get all videogames
 * @path {GET} /api/videogame/videogames
 */
router.get('/videogames', list);

/**
 * @name GetPhoto get the image of the videogame
 * @path {GET} /api/videogame/photo/:videogameId
 * @params {String} :videogameId is the unique identifier for the videogame
 */
router.get('/photo/:videogameId', photo);

/**
 * @name CreateVideogame create a videogame
 * @path {POST} /api/videogame/create
 * @body {String} name name of videogame
 * @body {String} description description of videogame
 * @body {Number} price videogame price
 * @body {String} category id of the category the game belongs to
 * @body {Number} quantity number of the videogames in stock
 * @body {File} photo is the image as a file
 */
router.post('/create', create);

// get info videogame
router.get('/:videogameId', read);

/**
 * @name DeleteVideogame delete a videogame
 * @path {DELETE} /api/videogame/:videogameId
 * @params {String} :videogameId is the unique identifier of the videogame
 */
router.delete('/:videogameId', remove);

// get param
router.param("videogameId", videogameById);

module.exports = router;