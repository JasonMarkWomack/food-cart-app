var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var port = 3000;
var conn = massive.connectSync({
  connectionString : "postgres://postgres:@localhost/network"
});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', conn);
var db = app.get('db');
var ctrl = require('./foodCtrl')

app.get('/api/food', ctrl.read_foods);
app.get('/api/product/:id', ctrl.read_foods);
app.post('/api/product', ctrl.creat_food);
app.put('/api/product/:productId',ctrl.update_food);
app.delete('/api/product/:productId',ctrl.delete_food);

app.listen(port, function() {
  console.log("Started server on port", port);
});
