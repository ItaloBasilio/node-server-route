const express = require("express"); // variavel para chamar a biblioteca

//Express é uma biblioteca do node.js . Express nos auxilia para criar um servidor
// React nos auxilia no front end

const server = express();

//rota 1
server.get('/abacate', (request,response) => {
    return response.send("Esse é o seu abacate")
} ) // criando rota

//rota 1
server.get('/morango', (request,response) => {

    console.log(request.query.usuario)
    return response.send(request.query.usuario)
} ) // criando rota


server.listen(3000) //criando um servidor