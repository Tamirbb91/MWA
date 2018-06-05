const express = require('express');
const mongoClient = require('mongodb');
const validator = require('express-validator');


var app = express();
const port = 8080;
const dbString = 'mongodb://127.0.0.1:27017/TestDB';
var jsonParser = express.json();

app.set('json spaces', 3);
app.use(validator());

app.get('/location', function(req, resp){
    mongoClient.connect(dbString, async function(err, client){
        if(err) throw err;
        
        var list = [];
        const db = client.db('TestDB');
        const result = await db.collection('location').find({}).toArray();
        resp.json(result);
        resp.end();
    })
});

app.get('/location/:name', function(req, resp){

    var locationName = req.params.name;

    mongoClient.connect(dbString, async function(err, client){
        if(err) throw err;
        
        const db = client.db('TestDB');
        const result = await db.collection('location').findOne({name : {$eq : 'Utopia'}});
        resp.json(result);
        resp.end();
    })
});

app.post('/location', jsonParser, function(req, resp){
    req.assert('name','name is required').notEmpty();
    req.assert('category','category is required').notEmpty();
    req.assert('location','location is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        resp.json({'error': errors});
    }    

    mongoClient.connect(dbString, async function(err, client){
        if(err) throw err;

        var list = [];
        const db = client.db('TestDB');
        const result = await db.collection('location')
        .insert({'name': req.body.name, 'category': req.body.category, 'location': req.body.location});
        resp.json({"message":"Record is inserted successfully"});
        resp.end();
    })
});

app.put('/location/:name', jsonParser, function(req, resp){
    var locationName = req.params.name;
    var item = {};

    if(req.body.name){
        item.name = req.body.name;
    }

    if(req.body.category){
        item.category = req.body.category;
    }

    if(req.body.location){            
        item.location = req.body.location;
    }

    mongoClient.connect(dbString, async function(err, client){
        if(err) throw err;

        var list = [];
        const db = client.db('TestDB');
        const result = await db.collection('location').update({'name': locationName}, {$set :item});
        resp.json({"message":"Record is updated successfully"});
        resp.end();
    })
});

app.delete('/location/:name', function(req, resp){
    var locationName = req.params.name;

    mongoClient.connect(dbString, async function(err, client){
        if(err) throw err;

        var list = [];
        const db = client.db('TestDB');
        const result = await db.collection('location').remove({'name': locationName});
        resp.json({"message":"Record is deleted successfully"});
        resp.end();
    })
});

// Geospatial index 
// db.collection('location').createIndex({location:'2d'});
// db.location.createIndex({location:'2d'});
app.post('/nearestLocation', jsonParser, function(req, resp){
    var criteria = {};
    req.assert('category','category is mandatory!').notEmpty();
    
    var errors = req.validationErrors();

    if(errors){
        resp.json({'error': errors});
    }
    
    criteria.category = req.body.category;

    if(req.body.name){
        criteria.name = req.body.name;
    }
    criteria.location = {$near : [41.017654, -91.9665342]};

    mongoClient.connect(dbString, async function(err, client){
        if(err) throw err;

        var list = [];
        const db = client.db('TestDB');
        const result = await db.collection('location').find(criteria).limit(3).sort({}).toArray();
        resp.json(result);
        resp.end();
    })
});

app.listen(port, ()=>console.log(`Server is listening port :${port}.`));

// db.location.insert({name: 'Maharishi University',   category: 'university',     location: [41.017654, -91.9665342]});
// db.location.insert({name: 'Walmart',                category: 'marketplace',    location: [41.0076913, -91.9953418]});
// db.location.insert({name: 'Midwestone',             category: 'bank',           location: [41.0076899, -92.0106627]});
// db.location.insert({name: 'Utopia',                 category: 'trailer',        location: [41.0248515, -91.9622701]});
// db.location.insert({name: 'WellsFargo',                 category: 'bank',        location: [41.4531685, -92.876624]});
// db.location.insert({name: 'BankOfAmerica',                 category: 'bank',        location: [41.586019, -94.2239799]});
// db.location.insert({name: 'BankOfIowa',                 category: 'bank',        location: [42.5643284, -93.5097192]});
