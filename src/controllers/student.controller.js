//const student = require('../models/student.model');
//const student = require('../models/student.model');
const student = require('../models/student.model');
const studentModel = require ('../models/student.model');

var dbConn = require ('../../config/db.config');

// gel all the student list 
exports.getStudentList = (req , res) => {
   // console.log('here all the student list');
 studentModel.getallstudents((err,student)=> {
        console.log('we re here');
        if (err)
        res.send(err);
        console.log('student', student);
        res.send(student)
        })
}

//get student (login)
exports.getloginstudent = (req,res) => {
 //   console.log('get students by id');
 var json= JSON.stringify(req.query)
 var obj = JSON.parse (json);
 dbConn.query('SELECT * FROM STUDENT WHERE username=? AND password=?', [obj.username,obj.password],function(err, rows){

    if(rows.length == 0)
    {
        res.json({status : false , message : 'No student exist'});
    
    }
    else
    {
        var studentData = JSON.stringify(rows[0])
    
        res.json({status : true , student : studentData});
    }
    
 })
}


   


//create new student(register)
exports.createnewstudent = (req , res ) => {
    console.log(req)
    console.log("received body",req.body)

   const studentreqdata = student.fromJson(req.body)   
   console.log("received student",studentreqdata)
    
    //checking null
    if (req.body.contructor === Object && object(req.body).length ===0){
        res.send (400).send({ success : false , message : ' please fill all fields'});
    }
    else { 
    studentModel.createstudent(studentreqdata, (err , student ) => {
        if(err)
        {
            res.send ({status : false , message : err,  })
        
        }
        else
        res.json ({status : true , message : 'student added successfully', data: student.insertid })
    })
}
}

//login

// update student 
exports.updatestudent = (req , res) =>{
    
    const studentreqdata =new studentModel (req.body);
    console.log ('studentreqdata update ' , studentreqdata);
    
    //checking null
    if (req.body.contructor === Object && object.keys(req.body).length ===0){
        res.send (400).send({ success : false , message : ' please fill all fields'});
    }
    else { 
    studentModel.updatestudent( req.params.id,studentreqdata, (err , student ) => {
        if(err)
        {
            //res.send(err);
            res.json ({status : false , message : err,  })
       
        }
        else
            res.json ({status : true , message : 'student updated successfully',  })
    })
}
}

// delete student 
exports.deletestudent = (req , res) => {
    studentModel.deletestudent(req.params.id , (err , student ) => {
        if(err)
        
            res.send(err);
            res.json({ success : true , message :'student deleted successfully'});
        }); 
}






