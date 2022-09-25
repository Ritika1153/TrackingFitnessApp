const express = require ( 'express');
const router = express.Router();

const taskcontroller = require('../controllers/task.controller');

//get all 
router.get('/', taskcontroller.gettaskList);

//get  by id
router.get('/:id' , taskcontroller.gettaskbyid);

// create new 
router.post('/register' , taskcontroller.createnewtask);

//update 
router.put ('/:id ' , taskcontroller.updatetask);

//delete 
router.delete('/:id'  , taskcontroller.deletetask);

module.exports = router;
