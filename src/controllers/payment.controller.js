//const student = require('../models/student.model');
const payment = require('../models/payment.model');
const paymentModel = require ('../models/payment.model');



// get all the payment list 
exports.getpaymentList = (req , res) => {
   
 paymentModel.getallpayment((err,payment)=> {
        console.log('we re here');
        if (err)
        res.send(err);
        console.log('payment', payment);
        res.send(student)
        })
}

//get payment by id
exports.getpaymentbyid = (req,res) => {
 //   console.log('get students by id');
paymentModel.getpaymentbyid(req.params.id,(err, payment) =>{
    if(err)
    res.send(err);
    console.log('single payment data' , payment);
    res.send(payment);
}) 
}

//create new student
exports.createnewpayment = (req , res ) => {
    const paymentreqdata =new paymentModel (req.body);
    console.log ('req data' , req.body);
    
    //checking null
    if (req.body.contructor === Object && object(req.body).length ===0){
        res.send (400).send({ success : false , message : ' please fill all fields'});
    }
    else { 
    paymentModel.createpayment(paymentreqdata, (err , payment ) => {
        if(err)
        res.send(err);
        res.json ({status : true , message : 'payment added successfully', data: payment.insertid })
    })
}
}

// update student 
exports.updatepayment = (req , res) =>{
    const paymentreqdata =new paymentModel (req.body);
    console.log ('paymentreqdata update ' , paymentreqdata);
    
    //checking null
    if (req.body.contructor === Object && object.keys(req.body).length ===0){
        res.send (400).send({ success : false , message : ' please fill all fields'});
    }
    else { 
    paymentModel.updatepayment( req.params.id,paymentreqdata, (err , payment ) => {
        if(err)
        res.send(err);
        res.json ({status : true , message : 'payment updated successfully',  })
    })
}
}

// delete student 
exports.deletepayment = (req , res) => {
    paymentModel.deletepayment(req.params.id , (err , payment ) => {
        if(err)
        
            res.send(err);
            res.json({ success : true , message :'student payment successfully'});
        }); 
}






