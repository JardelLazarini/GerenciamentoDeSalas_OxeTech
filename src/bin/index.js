const express = require('express');
const bp = require('body-parser');
const path = require('path');
const usuarioRoutes = require('../routes/usuarioRoutes');
const agendamentoRoutes = require('../routes/agendamentoRoutes'); 
const salaDeReuniaoRoutes = require('../routes/salaDeReuniaoRoutes');

const app = express();

//Configurando o parser
app.use(bp.json({limit: '10mb'}));
app.use(bp.urlencoded({extended: false}));

//Configurando o front-end
app.set('view engine', 'ejs');
app.set('views', 'views');

//Definindo arquivos estaticos
app.use(express.static('public'));

app.use('/usuarios', usuarioRoutes);
app.use('/agendamentos', agendamentoRoutes);
app.use('/salas-de-reuniao', salaDeReuniaoRoutes); 

module.exports = app;
