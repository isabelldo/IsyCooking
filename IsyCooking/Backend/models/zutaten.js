const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Zutat: String
});

module.exports = mongoose.model('Zutat', schema);