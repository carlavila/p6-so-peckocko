const express = require('express');
const router = express.Router(); // création d'un router avec la méthode .Router() d'express

const Sauce = require('../models/Sauce');

// Création des routes pour différentes requêtes
router.post('/', auth, multer, sauceCtrl.createSauce);           
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeOrDislikeSauce);



module.exports = router;