const { Subject } = require('rxjs');
const queryString = require('querystring');
const http = require('http');

const subject = new Subject();

subject.subscribe(sendHello);

function sendHello(reqres){
    console.log(queryString.parse(reqres.req.url));
    reqres.res.end('Hello');
}

http.createServer(( req, res ) => {
    subject.next({ req, res });
}).listen(8080, () => (console.log('Server is listening on port :8080')));

