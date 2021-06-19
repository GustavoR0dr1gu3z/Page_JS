const http = require('http');

function sitioWeb(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"}); // 200 TODO ESTA BIEN
    res.end("Mi Primer Servidor");
}

let servidor = http.createServer(sitioWeb);