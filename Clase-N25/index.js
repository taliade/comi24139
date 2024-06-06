console.log("Hola mundo!");

// Servidor desde Nodejs  servidor estatico

const http = require ('http'); //protocolo de comunicacion 
const server = http.createServer((req,res) =>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Hola Este mensaje es desde el servidor de Nodejs - Cambios y actualizacion");
});

server.listen(3000,()=>{
    console.log("El servidor esta encendido en http://localhost:3000")
});