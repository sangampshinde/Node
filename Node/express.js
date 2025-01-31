// nodemon
// environment variables

const express = require('express');
const app = express();

// http methods
// app.get('url',callback)
// app.post('url',callback)
// app.put('url',callback)
// app.delete('url',callback)

app.get('/',(req, res)=>{
    res.send("Hello World");
});

app.get("/api/courses",(req,res)=>{
    res.send([1,2,3])
})
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listining on port ${port}`));
