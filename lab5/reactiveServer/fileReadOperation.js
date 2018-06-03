const fs = require('fs');

process.on('message', function(filePath){
    var fileData = fs.readFileSync(filePath, 'UTF-8');
    process.send(fileData);
});