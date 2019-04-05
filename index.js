const express = require('express');
const log = require('morgan');
const app= express();
const routes = require('./routes');
const api = require ('./routes-api');

//Settings
app.set('appName','EstrenandoExpress');
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

//Middlewares
app.use(log('dev'));
// app.use(function(req,resp,next){
// console.log('request url:'+ req.url);
// next();
// });

//Ruteo
app.use(routes);
app.use('/api',api);

app.get('*',(req,resp)=>{
    resp.end("Archivo no encontrado");
    });

app.listen(3000, function(){
console.log("Servidor funcionando en localhost:3000");
console.log("Nombre de la App:",app.get('appName'))
});