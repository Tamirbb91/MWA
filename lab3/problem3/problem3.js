// ---------------------------
// -------ES 6 Version--------
// ---------------------------
const EventEmitter = require('events');

class Clock extends EventEmitter{
    constructor(){
        super();
    }
}

const clock = new Clock();
clock.on('tick', function(){
    console.log('woohoo');
});

setInterval(function(){
    clock.emit('tick')
}, 1000);


// ---------------------------
// -------ES 5 Version--------
// ---------------------------
// const Clock = require('./clock.js');
// const clock = new Clock();
//
// // const clock = new Clock();
// clock.on('tick', function(){
//     console.log('woohoo');
// });
//
// setInterval(function(){
//     clock.emit('tick')
// }, 1000);

