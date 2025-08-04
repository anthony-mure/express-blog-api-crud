//rotta INDEX
const index = (req, res) =>{

  res.send("Lista dei Posts");

};

//rotta SHOW
const show = (req, res) =>{

  res.send(`Dettaglio del post con id:${req.params.id}`);

};

//rotta CREATE
const store = (req, res) =>{

  res.send('Creazione di un nuovo post');

};

//rotta UPDATE
const update = (req, res) =>{

  res.send(`Modifica totale del post con id: ${req.params.id}`);

};

//rotta PATCH
const modify = (req, res) =>{

  res.send(`Modifica parziale del post con id: ${req.params.id}`);

};

//rotta DELETE
const destroy = (req, res) =>{

  res.send(`Cancellazione del post con id: ${req.params.id}`);

};


//esporto il modulo

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}