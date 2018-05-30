const fs = require('fs');
const zlib = require('zlib');


// Zip operation
// const gzip = zlib.createGzip();
//
// var readable = fs.createReadStream('./SnakeRiver.jpg');
// var compressed = fs.createWriteStream('./SnakeRiver.jpg.gz');
//
// readable.pipe(gzip).pipe(compressed);

// Unzip operation
const gunzip = zlib.createGunzip();

var readableUnzip = fs.createReadStream('./SnakeRiver.jpg.gz');
var uncompressed = fs.createWriteStream('./SnakeRiver.jpg');

readableUnzip.pipe(gunzip).pipe(uncompressed);