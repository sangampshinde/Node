// const _ = require('underscore');
// let result = _.contains([1,2,3],2)
// console.log(result);

// ===================================
// const express = require('express');
// const app = express();

// // http methods
// // app.get('url',callback)
// // app.post('url',callback)
// // app.put('url',callback)
// // app.delete('url',callback)

// app.get('/',(req, res)=>{
//     res.send("Hello World");
// });

// app.get("/api/courses",(req,res)=>{
//     res.send([1,2,3])
// })

// app.listen(3000,()=>console.log("listining on port no 3000..."));


// =============================================================
// nodemon
// environment variables
// you can use set to set environment variables to your application
// for that you have to use ` set PORT=5000 ` on terminal

// const express = require('express');
// const app = express();

// app.get('/',(req, res)=>{
//     res.send("Hello World");
// });

// app.get("/api/courses",(req,res)=>{
//     res.send([1,2,3])
// })
// const port = process.env.PORT || 3000;
// app.listen(port,()=>console.log(`listining on port ${port}`));

// ==================================================

// Route Parameters
// to get specific course by id

// const express = require('express');
// const app = express();

// app.get('/',(req, res)=>{
//     res.send("Hello World");
// });

// app.get("/api/courses",(req,res)=>{
//     res.send([1,2,3])
// })

// // /api/courses/id
// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id);
// })

// // http://localhost:3000/api/courses/10
// // 10

// // see how is req.params object look
// // app.get('/api/courses/:year/:month',(req,res)=>{
// //     res.send(req.params);
// // })

// // http://localhost:3000/api/courses/2018/11
// // {"year":"2018","month":"11"}

// // Query parameter
// // this are parametes after ? 
// // additiona data for our backend


// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.query);
// })

// // http://localhost:3000/api/courses/2018/11?sortBy=name
// // {"sortBy":"name"}

// const port = process.env.PORT || 3000;
// app.listen(port,()=>console.log(`listining on port ${port}`));

// ==================================================

// Handaling GET Requests

// const express = require('express');
// const app = express();

// const courses = [
//     {id:1,name:"course1"},
//     {id:2,name:"course2"},
//     {id:3,name:"course3"},
// ]

// app.get('/',(req, res)=>{
//     res.send("Hello World");
// });

// app.get("/api/courses",(req,res)=>{
//     res.send(courses)
// })


// // /api/courses/id
// app.get('/api/courses/:id',(req,res)=>{
//     const course = courses.find(course => course.id === parseInt(req.params.id));
//     if(!course)res.status(404).send("course not found");
//     res.send(course);
// })



// const port = process.env.PORT || 3000;
// app.listen(port,()=>console.log(`listining on port ${port}`));


// ===================================================================

// handaling POST request

// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
//     {id:1,name:"course1"},
//     {id:2,name:"course2"},
//     {id:3,name:"course3"},
// ]

// app.get('/',(req, res)=>{
//     res.send("Hello World");
// });

// app.get("/api/courses",(req,res)=>{
//     res.send(courses)
// })

// // POST APIs
// app.post('/api/courses',(req,res)=>{
//     const course = {
//         id:courses.length+1,
//         name:req.body.name
//     }
//     courses.push(course);
//     res.send(course);
// })


// // /api/courses/id
// app.get('/api/courses/:id',(req,res)=>{
//     const course = courses.find(course => course.id === parseInt(req.params.id));
//     if(!course)res.status(404).send("course not found");
//     res.send(course);
// })


// const port = process.env.PORT || 3000;
// app.listen(port,()=>console.log(`listining on port ${port}`));

// =================================================================

// POSTMAN
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
]

app.get('/',(req, res)=>{
    res.send("Hello World");
});

app.get("/api/courses",(req,res)=>{
    res.send(courses)
})

// POST APIs
app.post('/api/courses',(req,res)=>{
    const course = {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})


// /api/courses/id
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course)res.status(404).send("course not found");
    res.send(course);
})


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listining on port ${port}`));