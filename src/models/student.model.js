var dbConn = require ('../../config/db.config');
class student {
     constructor(username,password,gender,age,height,weight,bodyfat,bmi)
    {
        this.studentid = Math.floor((Math.random() * 100) + 1);
        this.username =username;
        this.password= password;
        this.gender=gender;
        this.age = age;
        this.height=height;
        this.weight=weight;
        this.bodyfat=bodyfat;
        this.bmi=bmi
       
    }
}
  ///test method for postman purpose 
student.fromJson = function (json){
    
    var req = JSON.stringify(json)
    var obj = JSON.parse (req);
console.log('gender',obj.gender);

 //there should be object instead of all paramaters 
    return new student (obj.username,obj.password,obj.gender,obj.age,obj.height,obj.weight,obj.bodyfat,obj.bmi);
       // console.log('gender');

};


//get all student
student.getallstudents = (result) =>{
    dbConn.query('SELECT * FROM STUDENT',(err,res) => {
        if(err){
            console.log('error while fetching student' , err);
            result(null, err);
        } else
        {
            console.log('student fetched successfully');
            result(null,res);
        }
    })
}



// create new student  (register)
student.createstudent = (studentreqdata , result) =>{
    dbConn.query('INSERT INTO STUDENT SET ? ' , studentreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('student added ');
            result(null , {status: true , message : 'student added',insertid : res.id})
        }
    })
}
// update student
student.updatestudent =(id , studentreqdata , result) => {
    dbConn.query('UPDATE STUDENT SET username=? , password=? , gender=? ,  age=? ,height=? ,weight=? , bodyfat=? , bmi=?   WHERE studentid =? ' , [studentreqdata.firstname, studentreqdata.lastname, studentreqdata.sex,studentreqdata.contact , studentreqdata.age , studentreqdata.height , studentreqdata.weight , studentreqdata.calories , studentreqdata.feestatus , studentreqdata.trainerid, studentreqdata.workouttype , studentreqdata.email , studentreqdata.address , id], (err,result) => {
        if(err){
        console.log('error while updating student');
        result(null,err);
    }
    else 
    {
        console.log('student update successfully');
        result(null ,res);
    }
});
}

// delete student 
student.deletestudent =( id ,result) => {
    dbConn.query('DELETE FROM STUDENT WHERE studentid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting student');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}

module.exports = student;

















