const express = require ( 'express');
const router = express.Router();

const sessioncontroller = require('../controllers/session.controller');

//get all 
router.get('/', sessioncontroller.getsessionList);

//get  by id
router.get('/:id' , sessioncontroller.getsessionbyid);

// create new 
router.post('/register' , sessioncontroller.createnewsession);

//update 
router.put('/:id ', sessioncontroller.updatesession);

//delete 
router.delete('/:id'  , sessioncontroller.deletesession);

module.exports = router;
