const os = require('os');

const checkSystem = function(){
    return new Promise(function(resolver, reject){
        const totalMemory = os.totalmem();
        if(totalMemory < 4 * 1000 * 1000 * 1000){
            reject('This app needs 4GB of RAM');
        }

        const cpus = os.cpus();
        if(cpus.length < 2){
            reject('Processor is not supported');
        }

        resolver('System is checked successfully');
    });
}

checkSystem()
.then(msg=>console.log(msg))
.catch(e=>console.error(e));

console.log('Checking your system...');