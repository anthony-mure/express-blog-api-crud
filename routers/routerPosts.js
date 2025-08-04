//importo express 
const express = require('express');

//definisco l'oggetto router
const router = express.Router();

//definisco delle rotte per i posts

//rotta index
router.get('/', (req, res) =>{

  res.send("Lista dei Posts");

});

//rotta show
router.get('/:id', (req, res) =>{

  res.send(`Dettaglio del post con id:${req.params.id}`);

});

//rotta create
router.post('/', (req, res) =>{

  res.send('Creazione di un nuovo post');

});

//rotta update
router.put('/:id', (req, res) =>{

   res.send(`Modifica totale del post con id: ${req.params.id}`);

});

//rotta patch
router.patch('/:id', (req, res) =>{

  res.send(`Modifica parziale del post con id: ${req.params.id}`);

});

//rotta delete
router.delete('/:id', (req, res) =>{

  res.send(`Cancellazione del post con id: ${req.params.id}`);

});

//esporto il router
module.exports = router;