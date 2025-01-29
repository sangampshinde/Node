var url = 'http://mylogger.io/log';

function log(message){
    // Send an HTTP request 
    console.log(message);
}

// module.exports.log = log;
// module.exports.url = url;

// if you have send log as function or single function 
module.exports = log;

// you can also change name whihile exporting like
// module.exports.urlpoint = url;
