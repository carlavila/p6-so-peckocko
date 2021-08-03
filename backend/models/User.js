const mongoose = require('mongoose');     //plug-in pour s'assurer l'impossibilité d'utiliser deux fois la même adresse e-mail 
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({        // Schéma type d'un utilisateur
  email: { type: String, required: true, unique: true }, // impossible de s'inscrire plusieurs fois avec la même adresse mail
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);       // validateur appliqué au schéma

module.exports = mongoose.model('User', userSchema);