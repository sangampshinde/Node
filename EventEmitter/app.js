// const EventEmmiter = require('events');
// const emmiter = new EventEmmiter();


// // listener called
// emmiter.on('onMessageLogged',function(){
//     console.log('message prints');
// })

// // Raise an Event
// emmiter.emit('onMessageLogged');


// PS C:\Users\sanga\OneDrive\Desktop\node\EventEmitter> node app.js
// message prints


// ====================================================================

// const EventEmmiter = require('events');
// const emmiter = new EventEmmiter();


// // listener called
// emmiter.on('onMessageLogged',function(arg){ //e eventArg
//     console.log('message prints',arg);
// })

// // Raise an Event
// emmiter.emit('onMessageLogged',{id:1,url:'http://'});

//PS C:\Users\sanga\OneDrive\Desktop\node\EventEmitter> node app.js
// message prints { id: 1, url: 'http://' }


// ===========================================================
const EventEmmiter = require('events');

const Logger = require("./logger.js");
const logger = new Logger();


// listener called
logger.on('onMessageLogged',function(arg){ //e eventArg
    console.log('message prints',arg);
})

logger.log('hi!');


