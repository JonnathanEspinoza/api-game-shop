const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.create = async(req, res) => {
    const category = new Category(req.body);
    await category.save((err, data) => {
        if (err) {
            return res.status(400).json({error: errorHandler(err)});
        }
        res.json({data});
    });
};

exports.list = async(req, res) => {
    const category = new Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({error: errorHandler(err)});
        }
        res.json(data);
    });
}