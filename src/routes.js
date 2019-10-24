const express = require('express');
const routes = express.Router();


const ProductController = require('./controllers/ProductController');

routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.index);
routes.post('/product/', ProductController.create);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;