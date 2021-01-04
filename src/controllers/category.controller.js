//@ts-check
const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dberrorHandler');

/**
 * My Category Controllers
 * @module CategoryController
 */
/**
 * Create a category
 * @param {{body:{name:string}}} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    const category = new Category(req.body);
    await category.save((err, data) => {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) });
        }
        res.json({ data });
    });
};

/**
 * List all Categories
 * @param {*} req 
 * @param {*} res 
 */
exports.list = async (req, res) => {
    const category = Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(data);
    });
}

/**
 * Remove a Category
 * @param {{category:object}} req 
 * @param {*} res 
 */
exports.remove = (req, res) => {
    let category = req.category;
    category.remove((err, data) => {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) })
        }
        res.json({
            message: "Category successfully deleted"
        })
    });
}

/**
 * Search a Category by Id
 * @param {object} req 
 * @param {*} res 
 * @param {*} next 
 * @param {string} id id category
 */
exports.categoryById = async(req, res, next, id) => {
    await Category.findById(id).exec( (err, data) => {
        if (err || !data) {
            return res.status(400).json({ error: "Category was not found or does not exist"});
        }
        req.category = data;
        next();
    });
}
