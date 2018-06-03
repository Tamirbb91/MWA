const express = require('express');
const fetch = require('node-fetch');
const { from } = require('rxjs');
var app = express();
var port = 8080;

app.set('json spaces', 3);
app.set('case sensitive routing', true);
app.set('x-powered-by', false);
app.set('strict routing', true);

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Using Promise
// app.get('/users', function(req, res){
//     fetch('http://jsonplaceholder.typicode.com/users/')
//     .then(res => res.json())
//     .then(json => {
//         res.status(200);
//         // res.set('Content-Type', 'application/json');
//         res.send(json);
//         res.end();
//     })
//     .catch(e => console.log(e));
// });

// Using Observable
// app.get('/users', function(req, res){
//     from(fetch('http://jsonplaceholder.typicode.com/users/')
//      .then(res => res.json())
//     )
//     .subscribe(
//         (data) => {
//             res.json(data);
//             res.end();
//         },

//         (err) => console.error(err),
//         () => console.log('Observable is done')
//     )
// });

// Using Async/Await
app.get('/users', async function(req, resp){
    try{
        await fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.json()
        .then(json => {
            resp.send(json);
        }
        ));
    } catch (err){
        console.error(err);
    }
});

app.listen(port, () => console.log(`The server is listening on port :${port}`));