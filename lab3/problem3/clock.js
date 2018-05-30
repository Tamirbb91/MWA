// ---------------------------
// -------ES 5 Version--------
// ---------------------------

function Clock(){
    this.events = {};
}

Clock.prototype.on = function(type, callback){
    this.events[type] = this.events[type] || [];
    this.events[type].push(callback);
};

Clock.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach((callback) => callback());
    }
};

module.exports = Clock;