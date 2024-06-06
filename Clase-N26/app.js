const http = require ('http');
const fs = require ('fs')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type': 'Text/plain'

//     });
//     res.end('Hola mundo');
// })


//para que sea contenido html 

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type': 'text/html; charset=UTF-8'
//     });
//     res.end("<h1>Hola Mundo!!</h1> <p> Ñandú</p>")

    
// })

const server = http.createServer((req,res)=>{
    const file =fs.readFileSync(__dirname + '/index.html')
    
    res.writeHead(200,{
        'Content-Type': 'text/html; charset=UTF-8'

    })
    res.end(file);
})



server.listen(3000,()=>{
    console.log('Esta Encendido el servidor http://localhost:3000')
});