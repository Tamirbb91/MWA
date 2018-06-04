const express = require('express');
const mongoClient = require('mongodb');
const crypto = require('crypto');

const app = express();
const port = 8080;

// Mongo Shell command
// db.homework7.insert({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"})

app.get('/secret', function(req, resp){
    mongoClient.connect('mongodb://127.0.0.1:27017/TestDB', function(err, client){
        if(err) throw err;

        const db = client.db('TestDB');
        db.collection('homework7').findOne({}, function(err2, doc){
            if(err2) throw err2;
            if(doc){
                const decipher = crypto.createDecipher('aes256', 'asaadsaad');
                var decrypted = decipher.update(doc.message, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                resp.end(decrypted);
            }
        });
    })
});

app.listen(port, ()=>console.log(`Server is listening on port :${port}`));
