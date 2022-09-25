const express = require ( 'express');
const router = express.Router();
const studentcontroller = require('../controllers/student.controller');



//get all students
router.get('/', studentcontroller.getStudentList);
module.exports= router;

// get student (login)
router.get('/login' , studentcontroller.getloginstudent);

// create new student (register)
router.post('/register' , studentcontroller.createnewstudent);

//update student
router.put ('/:id ' , studentcontroller.updatestudent);

//delete student
router.delete('/:id'  , studentcontroller.deletestudent);


module.exports = router;
