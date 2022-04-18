const express = require('express');
const router = express.Router();
const Rezept = require('../models/rezepte');

router.get('/rezepte', async(req, res) => {
    const allRezepte = await Rezept.find();
    res.send(allRezepte);
});

router.post('/rezepte', async(req, res) => {
    const newRezept = new Rezept({
        name: req.body.name,
        Anzahl_Portionen: req.body.Anzahl_Portionen,
        Vorbereitungszeit: req.body.Vorbereitungszeit,
        Gesamtzeit: req.body.Gesamtzeit,
        Titelbild: req.body.Titelbild,
        Kategorie: req.body.Kategorie,
        Anleitung: req.body.Anleitung
    })
    await newRezept.save();
    res.send(newRezept);
});

router.get('/rezepte/:id', async(req, res) => {
    try {
        const rezept = await Rezept.findOne({ _id: req.params.id });
        res.send(rezept);
    }
    catch {
        res.status(404);
        res.send({
            error: "Rezept does not exist!"
        });
    }
});

router.patch('/rezepte/:id', async(req, res) => {
    try {
        const rezept = await Rezept.findOne({ _id: req.params.id });

        if(req.body.name)
        {
            rezept.name = req.body.name 
        }
        if(req.body.Anzahl_Portionen)
        {
            rezept.Anzahl_Portionen = req.body.Anzahl_Portionen
        }
        if(req.body.Vorbereitungszeit)
        {
            rezept.Vorbereitungszeit = req.body.Vorbereitungszeit
        }
        if(req.body.Gesamtzeit)
        {
            rezept.Gesamtzeit = req.body.Gesamtzeit
        }
        if(req.body.Titelbild)
        {
            rezept.Titelbild = req.body.Titelbild 
        }
        if(req.body.Kategorie)
        {
            rezept.Kategorie = req.body.Kategorie 
        }
        if(req.body.Anleitung)
        {
            rezept.Anleitung = req.body.Anleitung 
        }

        await Rezept.updateOne({ _id: req.params.id }, rezept);
        res.send(rezept)
    }
    catch {
        res.status(404)
        res.send({
            error: "Rezept does not exist!"
        })
    }
});

router.delete('/rezepte/:id', async(req, res) => {
    try {
        await Rezept.deleteOne({ _id: req.params.id });
        res.status(204).send()
    }
    catch {
        res.status(404)
        res.send({
            error: "Rezept does not exist!"
        })
    }
});

module.exports = router;