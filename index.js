const express = require('express');
const app= express();

app.get('/',function(req,resp){
resp.end("Hola mundo");
});

app.listen(3000, function(){
console.log("Servidor funcionando en localhost:3000");
});