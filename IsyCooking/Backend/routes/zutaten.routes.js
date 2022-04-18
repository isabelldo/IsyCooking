const express = require('express');
const router = express.Router();
const Zutat = require('../models/zutaten')

router.get('/zutaten', async(req, res) => {
    const allZutaten = await Zutat.find();
    res.send(allZutaten);
});

router.post('/zutaten', async(req, res) => {
    const newZutat = new Zutat({
        Zutat: req.body.Zutat,
    })
    await newZutat.save();
    res.send(newZutat);
});

router.get('/zutaten/:id', async(req, res) => {
    try {
        const zutat = await Zutat.findOne({ _id: req.params.id });
        res.send(zutat);
    }
    catch {
        res.status(404);
        res.send({
            error: "Zutat does not exist!"
        });
    }
});

router.patch('/zutaten/:id', async(req, res) => {
    try {
        const Zutat = await Zutat.findOne({ _id: req.params.id });

        if(req.body.Zutat)
        {
            Zutat.Zutat = req.body.Zutat 
        }
        
        await Zutat.updateOne({ _id: req.params.id }, rezept);
        res.send(Zutat)
    }
    catch {
        res.status(404)
        res.send({
            error: "Zutat does not exist!"
        })
    }
});

router.delete('/zutaten/:id', async(req, res) => {
    try {
        await Zutat.deleteOne({ _id: req.params.id });
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