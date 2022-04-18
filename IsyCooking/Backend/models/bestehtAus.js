const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    IdRezept: String,
    IdZutat: String,
    Menge: String,
    Mengeneinheit: String,
});

module.exports = mongoose.model('BestehtAus', schema);