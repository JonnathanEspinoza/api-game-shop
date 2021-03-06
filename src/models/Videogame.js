const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

/**
 * The data-layer for a Videogames
 * @module Models
 */
/**
 * Videogame Schema
 * @constructor Videogame
 */
const videogameSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        description: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        quantity: {
            type: Number
        },
        photo: {
            data: Buffer,
            contentType: String
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Videogame', videogameSchema);