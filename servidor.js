const http = require('http');

function sitioWeb(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"}); // 200 TODO ESTA BIEN
    res.end("Mi Primer Servidor");
}

let servidor = http.createServer(sitioWeb);

// En que direccion usar mi servidor
servidor.listen(6969,"192.168.8.100");

console.log("servidor corriendo en el puerto 6969");