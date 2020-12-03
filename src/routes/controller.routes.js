const express = require('express');
const router = express.Router();

const { list, create } = require('../controllers/category.controller');

router.get('/categories', list);
router.post('/crate', create);

module.exports=router;