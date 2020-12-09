const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dberrorHandler');

// Crear una categoria
exports.create = async (req, res) => {
    const category = new Category(req.body);
    await category.save((err, data) => {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) });
        }
        res.json({ data });
    });
};

// Listar todas las categorias
exports.list = async (req, res) => {
    const category = Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(data);
    });
}

// Eliminar una categoria
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

// Buscar categoria por id
exports.categoryById = async(req, res, next, id) => {
    await Category.findById(id).exec( (err, data) => {
        if (err || !data) {
            return res.status(400).json({ error: "Category was not found or does not exist"});
        }
        req.category = data;
        next();
    });
}
