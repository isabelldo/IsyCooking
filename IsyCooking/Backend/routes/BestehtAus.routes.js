const express = require('express');
const router = express.Router();
const BestehtAus = require('../models/bestehtAus')

router.get('/bestehtAus', async(req, res) => {
    const allVerbindungen = await BestehtAus.find();
    res.send(allVerbindungen);
});

router.post('/bestehtAus', async(req, res) => {
    const newVerbindungen = new BestehtAus({
        IdZutat: req.body.IdZutat,
        IdRezept: req.body.IdRezept,
        Menge: req.body.Menge,
        Mengeneinheit: req.body.Mengeneinheit,
    })
    await newVerbindungen.save();
    res.send(newVerbindungen);
});

router.get('/bestehtAus/:id', async(req, res) => {
    try {
        const Verbindung = await BestehtAus.findOne({ _id: req.params.id });
        res.send(Verbindung);
    }
    catch {
        res.status(404);
        res.send({
            error: "Verbindung does not exist!"
        });
    }
});

router.patch('/bestehtAus/:id', async(req, res) => {
    try {
        const Verbindung = await BestehtAus.findOne({ _id: req.params.id });

        if(req.body.IdZutat)
        {
            Verbindung.IdZutat = req.body.IdZutat
        }
        if(req.body.IdRezept)
        {
            Verbindung.IdRezept = req.body.IdRezept
        }
        if(req.body.Menge)
        {
            Verbindung.Menge = req.body.Menge
        }
        if(req.body.Mengeneinheit)
        {
            Verbindung.Mengeneinheit = req.body.Mengeneinheit
        }
        
        await BestehtAus.updateOne({ _id: req.params.id }, rezept);
        res.send(Verbindung)
    }
    catch {
        res.status(404)
        res.send({
            error: "Verbindung does not exist!"
        })
    }
});

router.delete('/bestehtAus/:id', async(req, res) => {
    try {
        await BestehtAus.deleteOne({ _id: req.params.id });
        res.status(204).send()
    }
    catch {
        res.status(404)
        res.send({
            error: "Verbindung does not exist!"
        })
    }
});

module.exports = router;