const express = require('express'); //Framework de rotas e views
const cors = require('cors');//Framework para disponibilizar acesso de todos os dominios, pode ser configurado
const mongodb = require('mongodb'); //Framework de conexão ao MongoDB
const mongoose = require('mongoose'); //ORM de conexão ao MongoDB
const requireDir = require('require-dir'); //Utilizado para requerer arquivos de uma pasta especifica, nesse caso buscando os modulos criados

//Inicinando o App
const app = express();

//Habilitar uso de json na aplicação
app.use(express.json());

//Habilitado para todos os dominios
app.use(cors());

//Connection to mongodb with mongoose
mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-uj8sq.mongodb.net/nodeapi?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>
        console.log('Conectou')).catch(err => console.log('Não conectou', err));

//Busca  todos os models
requireDir('./src/models');

//Aponta arquivo de rotas e associa à aplicação
app.use('/api', require('./src/routes'));

app.listen(3001);
