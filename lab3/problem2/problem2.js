const http = require('http');
const server = http.createServer();

const fs = require('fs');

server.on('request', function(req, res){
   // res.writeHead(200, 'Content-Type', 'image/jpeg');
   // fs.readFile("./SnakeRiver.jpg", function(err, data){
   //     res.end(data);
   // });

   const src = fs.createReadStream('./SnakeRiver.jpg');
   src.pipe(res);
});

server.listen('8080', function(){
   console.log('Server is working on port :8080')
});