const express = require ( 'express');
const router = express.Router();

const dietcontroller = require('../controllers/diet.controller');

//get all diet
router.get('/', dietcontroller.getdietList);

//get diet by id
router.get('/:id' , dietcontroller.getdietbyid);

// create new diet
router.post('/' , dietcontroller.createnewdiet);

//update diet
router.put ('/:id ' , dietcontroller.updatediet);

//delete diet
router.delete('/:id'  , dietcontroller.deletediet);

module.exports = router;
