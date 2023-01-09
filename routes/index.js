// inicjacja modułów 
const express = require('express'); 
const router = express.Router(); 
// definicja kontrolerów w osobnych plikach 
const PagesController = require('../controllers/PagesController');

//const ApplicationsController = require('../controllers/ApplicationsController');
 // połączenie tras z poszczególnymi kontrolerami 
 router.get('/', PagesController.home); 
// router.post('/applications', ApplicationsController.store); 
 module.exports = router;