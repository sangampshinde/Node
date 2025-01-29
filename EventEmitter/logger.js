const EventEmmiter = require('events');


var url = 'http://mylogger.io/log';

class Logger extends EventEmmiter {

    log(message){
        // Send an HTTP request 
        console.log(message);

        // Raise an Event
        this.emit('onMessageLogged',{id:1,url:'http://'});
    };



}

module.exports = Logger;


