const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Videogame = require('../models/Videogame');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    console.log("entrastes");
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async(err, fields, files) => {
        if (err) {
            return res.status(400).json({error: "Image could not be uploaded"});
        }
        
        const { name, description, price, category, quantity } = fields;
        let videogame = new Videogame(fields);

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({error: "Image should be less than 1MB in size"});
            }
            videogame.photo.data = fs.readFileSync(files.photo.path);
            videogame.photo.contentType = files.photo.type;
        }

        await videogame.save((err, result) => {
            if (err) {
                return res.starus(400).json({error: errorHandler(err)});
            }
            res.json(result);
        });

    });
}

exports.list = async(req, res) => {
    let order = req.query.order ? req.query.order : 'asc'; // variable para ordenar los resultados asc->ascendente por defecto
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'; // filtrar

    await Videogame.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .exec((err, videogames) => {
            if (err) {
                return res.status(400).json({error: "Videogames not found"});
            }
            res.json(videogames);
        });
}