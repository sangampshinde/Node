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
// test post route on http://localhost:3000/api/courses
// giving data
/**
{
    "name":"course4"
}
    
response we get is on POSTMAN

{
    "id": 4,
    "name": "course4"
}

and on screen of http://localhost:3000/api/courses

[
  {
    "id": 1,
    "name": "course1"
  },
  {
    "id": 2,
    "name": "course2"
  },
  {
    "id": 3,
    "name": "course3"
  },
  {
    "id": 4,
    "name": "course4"
  }
]

*/

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

// ============================================================================

// Input validation always validate your inputs 

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
//  if( !req.body.name || req.body.name.length < 3){
//     // 400 Bad Request
//     res.status(400).send("Name is Required and have at least 3 charaters");
//     return;
//  }

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

// -----------------------------------------

// npm joi a validation npm package


// const express = require('express');
// const Joi = require('joi'); 
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 1, name: "course1" },
//     { id: 2, name: "course2" },
//     { id: 3, name: "course3" }
// ];

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.get("/api/courses", (req, res) => {
//     res.send(courses);
// });

// // POST API with proper Joi validation
// app.post('/api/courses', (req, res) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     });

//     const { error } = schema.validate(req.body);

//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(course);
//     res.send(course);
// });

// // GET course by ID
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(course => course.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send("Course not found");
//     res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

// ===================================================================

// Updating Resources
// HTTP PUT Requests

// const express = require('express');
// const Joi = require('joi'); 
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 1, name: "course1" },
//     { id: 2, name: "course2" },
//     { id: 3, name: "course3" }
// ];

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.get("/api/courses", (req, res) => {
//     res.send(courses);
// });

// // POST API with proper Joi validation
// app.post('/api/courses', (req, res) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     });

//     const { error } = schema.validate(req.body);

//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(course);
//     res.send(course);
// });

// // GET course by ID
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(course => course.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send("Course not found");
//     res.send(course);
// });


// // PUT update request
// app.put('/api/courses/:id',(req,res)=>{
//   // Look up the course
//   const course = courses.find(course => course.id === parseInt(req.params.id));
//   // if course does not exist return 404
//   if(!course) return res.status(404).send("The course with given ID is not found")

//   // validate
//   const schema = Joi.object({
//     name: Joi.string().min(3).required()
//   });

//   const { error } = schema.validate(req.body);

//   // if invalid, return 400 -Bad Request
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   // update the course
//   course.name = req.body.name;
//   // return updated course to client
//   res.send(course);

// })


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));


// -----------------------------------------------------------------------------
// make a validation done by a function 
// this snippet is about validation update adjustment so that we can use it again and again

// const express = require('express');
// const Joi = require('joi'); 
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 1, name: "course1" },
//     { id: 2, name: "course2" },
//     { id: 3, name: "course3" }
// ];

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.get("/api/courses", (req, res) => {
//     res.send(courses);
// });

// // POST API with proper Joi validation
// app.post('/api/courses', (req, res) => {

//   const error = validation(req.body);

//   // if invalid, return 400 -Bad Request
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }


//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(course);
//     res.send(course);
// });

// // GET course by ID
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(course => course.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send("Course not found");
//     res.send(course);
// });


// // PUT update request
// app.put('/api/courses/:id',(req,res)=>{
//   // Look up the course
//   const course = courses.find(course => course.id === parseInt(req.params.id));
//   // if course does not exist return 404
//   if(!course) return res.status(404).send("The course with given ID is not found")

//   const error = validation(req.body);

//   // if invalid, return 400 -Bad Request
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   // update the course
//   course.name = req.body.name;
//   // return updated course to client
//   res.send(course);

// });

// function validation(course){
//   // validate
//   const schema = Joi.object({
//     name: Joi.string().min(3).required()
//   });
//   const { error } = schema.validate(course);
//   return error;
// }


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

// =========================================================================================

// Handle HTTP DELETE Request


const express = require('express');
const Joi = require('joi'); 
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }
];

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

// POST API with proper Joi validation
app.post('/api/courses', (req, res) => {

  const error = validation(req.body);

  // if invalid, return 400 -Bad Request
  if (error) {
    return res.status(400).send(error.details[0].message);
  }


    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// GET course by ID
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found");
    res.send(course);
});


// PUT route update request
app.put('/api/courses/:id',(req,res)=>{
  // Look up the course
  const course = courses.find(course => course.id === parseInt(req.params.id));
  // if course does not exist return 404
  if(!course) return res.status(404).send("The course with given ID is not found")

  const error = validation(req.body);

  // if invalid, return 400 -Bad Request
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // update the course
  course.name = req.body.name;
  // return updated course to client
  res.send(course);

});

function validation(course){
  // validate
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  const { error } = schema.validate(course);
  return error;
}

// http delete request 
app.delete('api/courses/:id',(req,res)=>{
  // look up for course

});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));