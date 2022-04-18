const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    Anzahl_Portionen: String,
    Vorbereitungszeit: String,
    Gesamtzeit: String,
    Kategorie: String,
    Titelbild: String,
    Anleitung: String,
});

module.exports = mongoose.model('Rezept', schema);