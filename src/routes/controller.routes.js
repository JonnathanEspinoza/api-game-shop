const express = require('express');
const router = express.Router();

const { list, create, remove, categoryById } = require('../controllers/category.controller');

/**
 * The API routes of the controller
 * @module API
 */
/**
 * @name GetCategories get all categories
 * @path {GET} /api/category/categories
 */
router.get('/categories', list);

/**
 * @name CreateCategorie create a categorie
 * @path {POST} /api/category/create
 * @body {String} name is the category name
 */
router.post('/create', create);

/**
 * @name DeleteCategorie delete a categorie
 * @path {DELETE} /api/category/:categoryId
 * @params {String} :categoryId is the unique identifier for the categorie
 */
router.delete('/:categoryId', remove);

// metodo para obtener el parametro
router.param('categoryId', categoryById);

module.exports=router;