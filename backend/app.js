// Importer le package express
const express = require('express');
//importer body-parser
const bodyParser = require('body-parser'); //Pour gérer la demande POST provenant de l'application front-end
//Importer mongoose
const mongoose = require("mongoose");
//Importer helmet
const helmet = require("helmet");
//Importer path qui donne acces au chemin du système du fichier
const path = require("path");

require('dotenv').config();

//Importer le routeur
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


mongoose.connect(process.env.DATABASE_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//Créer une application express
const app = express()

app.use(helmet());

app.use((req, res, next) => { // accéder à notre API depuis n'importe quelle origine '*'
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
	  "Access-Control-Allow-Methods",
	  "GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});


//Transforme le corp de la requête en object Javascript utilisable 
app.use(bodyParser.json());
 
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/sauces', sauceRoutes); // importation du routeur
app.use('/api/auth', userRoutes);

//exporter cette application pour qu'on puisse y accéder depuis les autres fichiers 
module.exports = app;

