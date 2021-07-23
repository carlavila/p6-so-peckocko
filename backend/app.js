const express = require('express'); // cela importe le paquet express pour la création de l'API
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

 // Récupération des routes
const saucesRoutes = require('./routes/sauces.js');  

// Tentative de connexion à la base
mongoose.connect('mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express(); // ça crée une application express

// Déclaration des headers
app.use((req, res, next) => {     // donne l'accès du backend au frontend  
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
  });

app.use(bodyParser.json()); // transforme le corp de la requête en object Javascript utilisable 

app.use('/api/sauces', saucesRoutes);
module.exports = app; // exporter cette application pour pouvoir y accéder depuis les autres fichiers

// middleware : fonction dans une application express qui recoit la requete et la réponse, qu'il les gère et qui peuvent ensuite passer l'execution à un prochain middleware