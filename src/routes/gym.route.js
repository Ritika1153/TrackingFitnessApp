const express = require ( 'express');
const router = express.Router();

const gymcontroller = require('../controllers/gym.controller');

//get all gym
router.get('/', gymcontroller.getgymList);

//get gym by id
router.get('/:id' , gymcontroller.getgymbyid);

// create new gym
router.post('/' , gymcontroller.createnewgym);

//update gym
router.put ('/:id ' , gymcontroller.updategym);

//delete gym
router.delete('/:id'  , gymcontroller.deletegym);

module.exports = router;
