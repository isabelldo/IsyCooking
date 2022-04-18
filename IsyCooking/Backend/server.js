const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const BestehtAusRoutes = require('./routes/BestehtAus.routes');
const RezepteRoutes = require('./routes/rezepte.routes');
const ZutatenRoutes = require('./routes/zutaten.routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/bestehtAus', BestehtAusRoutes);
app.use('/rezepte', RezepteRoutes);
app.use('/zutaten', ZutatenRoutes); 

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});