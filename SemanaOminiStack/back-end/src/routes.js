const {Router} = require('express');

const Devcontroller = require('./controller/Devcontroller');
const Searchcontroller = require('./controller/Searchcontroller');

const routes = Router();

// metodos HTTP: GET, POST, PUT, DELETE

//tipos de Parametros:

//Query Parms: request.query (Filtros, Ordenação, paginação, ...)
//Route Parms: request.params (Indentificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alreração de um resgistro)

//Banco Mongo DB (Não relacional)
routes.get('/devs', Devcontroller.index)
routes.post('/devs',Devcontroller.store)

routes.get('/search',Searchcontroller.index)

module.exports = routes