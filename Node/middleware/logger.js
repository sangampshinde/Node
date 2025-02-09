function log(req,res,next){
    console.log("Logging.....");
    next(); // it important to end req-res cycle pass control to next middleware or route 
}

function auth (req,res,next){
    console.log("Authonticated.....");
    next();
  }


  module.exports = {log,auth};