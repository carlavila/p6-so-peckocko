// Importer le package express
const express = require('express');
//importer body-parser
const bodyParser = require('body-parser');
//Importer mongoose
const mongoose = require("mongoose");
//Importer path qui donne acces au chemin du systeme du fichier
const path = require("path");
//Importer le routeur
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


mongoose.connect('mongodb://user_1:openclassrooms@cluster0-shard-00-00.4voav.mongodb.net:27017,cluster0-shard-00-01.4voav.mongodb.net:27017,cluster0-shard-00-02.4voav.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-z8zjxo-shard-0&authSource=admin&retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//Créer une application express
const app = express()


app.use((req, res, next) => {
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

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

//exporter cette application pour qu'on puisse y accéder depuis les autres fichiers 
module.exports = app;

