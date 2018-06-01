const rx = require('rxjs');
const os = require('os');

const checkSystem = rx.Observable.create(function(observer){
    observer.next('Checking your system...');
    const totalMemory = os.totalmem();
    if(totalMemory < 4 * 1000 * 1000 * 1000){
        observer.error('This app needs 4GB of RAM');
    }

    const cpus = os.cpus();
    if(cpus.length < 2){
        observer.error('Processor is not supported');
    }

    observer.complete();
});

var subscription = checkSystem.subscribe(
    x => console.log('msg : ' + x),
    e => console.error('error : ' + e),
    () => console.log('System is checked successfully')); 