const mongoose = require('mongoose');

/**
 * The data-layer for a Category of videogame
 * @module Models
 */
/**
 * Category Schema
 * @constructor Category
 */
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Category", categorySchema);