var dbConn = require ('../../config/db.config');
var payment = function(payment) {
    
    this.studentid=payment.studentid;
    this.trainerid=payment.trainerid;
    this.dietid=payment.dietid;
    this.gymid=payment.gymid;
    this.fee=payment.fee;
}


//get all student
payment.getallpayment = (result) =>{
    dbConn.query('SELECT * FROM PAYMENT',(err,res) => {
        if(err){
            console.log('error while fetching payment' , err);
            result(null, err);
        } else
        {
            console.log('payment fetched successfully');
            result(null,res);
        }

    })
}

//get student by id
payment.getpaymentbyid = (id , result) =>  {
    dbConn.query('SELECT * FROM PAYMENT WHERE studentid=?', id ,(err , res ) => {
        if(err) {
            console.log ('error while fetching id ',err);
            result(null, err);
            
        }else 
        {
            result(null , res);

        }
    })
}

// create new student 
payment.createnewpayment = (paymentreqdata , result) =>{
    dbConn.query('INSERT INTO payment SET ? ' , paymentreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('payment added ');
            result(null , {status: true , message : 'payment added',insertid : res.id})
        }
    })
}
// update student
payment.updatepayment =(id , paymentreqdata , result) => {
    dbConn.query('UPDATE payment SET trainerid=?,gymid=?, dietid=? , fee=? WHERE studentid =? ' , [paymentreqdata.trainerid, paymentreqdata.gymid, paymentreqdata.dietid,paymentreqdata.fee , id], (err,result) => {
        if(err){
        console.log('error while updating payment');
        result(null,err);
    }
    else 
    {
        console.log('payment update successfully');
        result(null ,res);
    }
});
}

// delete student 
payment.deletepayment =( id ,result) => {
    dbConn.query('DELETE FROM payment WHERE studentid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting payment');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}

module.exports = payment;

















