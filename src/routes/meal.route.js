const express = require ( 'express');
const router = express.Router();

const mealcontroller = require('../controllers/meal.controller');

//get all meal
router.get('/', mealcontroller.getmealList);

//get meal by id
router.get('/:id' , mealcontroller.getmealbyid);

// create new meal
router.post('/' , mealcontroller.createnewmeal);

//update meal
router.put ('/:id ' , mealcontroller.updatemeal);

//delete meal
router.delete('/:id'  , mealcontroller.deletemeal);

module.exports = router;
