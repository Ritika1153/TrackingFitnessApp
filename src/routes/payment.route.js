const express = require ( 'express');
const router = express.Router();
const paymentcontroller = require('../controllers/payment.controller');



//get all 
router.get('/', paymentcontroller.getpaymentList);
module.exports= router;

// get  by id
router.get('/:id' , paymentcontroller.getpaymentbyid);

// create new 
router.post('/' , paymentcontroller.createnewpayment);

//update 
router.put ('/:id ' , paymentcontroller.updatepayment);

//delete 
router.delete('/:id'  , paymentcontroller.deletepayment);


module.exports = router;
