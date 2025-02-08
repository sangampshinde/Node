const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }
];


router.get("/", (req, res) => {
    res.send(courses);
});

// POST API with proper Joi validation
router.post('/', (req, res) => {

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
router.get('/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found");
    res.send(course);
});


// PUT route update request
router.put('/:id',(req,res)=>{
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
router.delete('/:id',(req,res)=>{

  // Look up the course
  const course = courses.find(course => course.id === parseInt(req.params.id));
  // if course does not exist return 404
  if(!course) return res.status(404).send("The course with given ID is not found")

  // delete
  const index = courses.indexOf(course);
  courses.splice(index,1);
  
  // return same course
  res.send(course);

});


module.exports = router;