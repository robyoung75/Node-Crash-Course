const mongoose = require('mongoose');

// Schema is a constructor function
const Schema = mongoose.Schema;

// Schema defines the structure for our documents
// The model is based on the schema. The model 
// surrounds the schema and provides a way to comm with datbase and with docs of schema type.
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }

}, { timestamps: true });

// model for blogSchema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;