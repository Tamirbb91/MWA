const express = require('express');
const validator = require('express-validator');
const logger = require('morgan');

var app = express();
const port = 8080;

app.use(logger('combined'));
app.use(validator());
app.set('json spaces', 3);

var jsonParser = express.json();
var grades = [
    { id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95}
];

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTION');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Content-Length');
    next();
})

app.get('/grades', function(req, res){
    console.log('grades');
    res.json(grades);
    res.end();
});

app.post('/grades', jsonParser, function(req, res){
    req.assert('id','Id is required').notEmpty();
    req.assert('name','Name is required').notEmpty();
    req.assert('course','Course is required').notEmpty();
    req.assert('grade','grade is required').notEmpty();

    var errors = req.validationErrors();
    res.json({'error': errors});
    console.log(req.body);
});

app.put('/grades', jsonParser, function(req, res){
    console.log(req.body);
});

app.delete('/grades', jsonParser, function(req, res){
    console.log(req.body);
});

app.listen(port, () => console.log(`Server is listening on port :${port}`))