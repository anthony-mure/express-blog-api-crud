
//importo l'array contenuto in dataPosts
const posts = require('../data/dataPosts.js');

//rotta INDEX
const index = (req, res) =>{

  res.json(posts);

};

//rotta SHOW
const show = (req, res) =>{

  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

  res.json(post);

};

//rotta CREATE
const store = (req, res) =>{

  //generare il nuovo id
  const newId = posts[posts.length - 1].id + 1;

  //recuperare i dati del body della richiesta
  const { titolo, contenuto, immagine, tags } = req.body;

  //push del nuovo oggetto dentro l'array
  posts.push({
    id : newId,
    titolo,
    contenuto,
    immagine,
    tags
  });

  //restituisco status e risposta del corretto inserimento
  res.status(201).json({ result : true, message : "Inserimento avvenuto con successo"});

  console.log(req.body);

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

  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

  posts.splice(posts.indexOf(post), 1);

  res.sendStatus(204);

  console.log(posts);

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