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
var idSequence = 1;

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTION');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Content-Length');
    next();
})

app.get('/grades', function(req, res){    
    res.json(grades);
    res.end();
    console.log(grades);
});

app.get('/grades/:id', function(req, res){
    var id = req.params.id;
    for(var grade of grades){
        if(grade.id == id){
            res.json(grade);
            res.end();
        }
    }
    console.log(grades);
    res.json({"message":"The record is not found."});
    res.end();
    
});

app.post('/grades', jsonParser, function(req, res){
    req.assert('name','Name is required').notEmpty();
    req.assert('course','Course is required').notEmpty();
    req.assert('grade','grade is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.json({'error': errors});
    } else {
        var entry = {id: ++idSequence, name: req.body.name, course: req.body.course, grade: req.body.grade};
        grades.push(entry);
        res.json({"message":"Record is inserted successfully"});
        res.end();
    }
    console.log(grades);
});

app.put('/grades/:id', jsonParser, function(req, res){
    var id = req.params.id;
    var item = {};
    for(var grade of grades){
        if(grade.id == id){
            item = grade;
            if(req.body.name){
                item.name = req.body.name;
            }
    
            if(req.body.course){
                item.course = req.body.course;
            }
    
            if(req.body.grade){
                item.grade = req.body.grade;
            }
    
            res.json({"message":"The record is updated successfully."});
            res.end();
        }
    }

    res.json({"message":"The record is not found."});
    res.end();

    console.log(grades);
});

app.delete('/grades/:id', jsonParser, function(req, res){
    var id = req.params.id;

    for(var i=0; i< grades.length; i++){
        if(grades[i].id == id){
            grades.splice( i, 1 );
            res.json({"message":"The record is deleted successfully."});
            res.end();
        }
    }

    res.json({"message":"The record is not found."});
    res.end();
    console.log(grades);
});

app.listen(port, () => console.log(`Server is listening on port :${port}`))