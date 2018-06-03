const { Subject } = require('rxjs');
const queryString = require('querystring');
const url = require('url');
const http = require('http');
const { fork } = require('child_process');

const port = 8080;
const subject = new Subject();

subject.subscribe(fileRead);

function fileRead(reqres){
    var query = queryString.parse(url.parse(reqres.req.url).query);
    if(query.url){
        var pathToFile = query.url;
        const childProcess = fork('fileReadOperation.js');
        childProcess.send(pathToFile);
        childProcess.on('message', fileData => {
            reqres.res.end(fileData);
        });
    }
}

http.createServer(( req, res ) => {
    subject.next({ req, res });
}).listen(port, () => (console.log(`Server is listening on port :${port}`)));
// http://localhost:8080/?url=package.json
