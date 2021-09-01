const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator"); // package de mongoose pour éviter de s'enregistrer plusieurs fois avec la meme adresse mail

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator); // l'appliquer au schema 

module.exports = mongoose.model("User", userSchema);