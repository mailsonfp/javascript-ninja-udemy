'use strict';

var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var people = {
    joao: {
        nome: 'João',
        idade: 30
    },
    maria: {
        nome: 'José',
        idade: 45
    },
    mailson:{
        nome: 'Mailson',
        idade: 32
    }
};

app.get('/', function(req, res){
    res.send('<h1>Home</h1>')
});

app.get('/user', function(req, res){
    res.send('User')
});

app.get('/user/:username', function(req, res){
    var username = req.params.username;
    if(people[username]){
        return res.json(people[username]);    
    }
    
    res.status(404).json({error: 'Usuário não encontrado'});
});


app.listen(3000);