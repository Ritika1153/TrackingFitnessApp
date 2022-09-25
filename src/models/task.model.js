var dbConn = require ('../../config/db.config');

var task = function(task ) {
    this.taskid = task.taskid;
    this.studentid = task.studentid;
    this.trainerid = task.trainerid;
    this.status = task.status;
    this.feedback = task.feedback;

}


//get all task
task.getalltask = (result) =>{
    dbConn.query('SELECT * FROM TASK',(err,res) => {
        if(err){
            console.log('error while fetching task' , err);
            result(null, err);
        } else
        {
            console.log('task fetched successfully');
            result(null,res);
        }

    })
}

//get task by id
task.gettaskbyid = (id , result) =>  {
    dbConn.query('SELECT * FROM TASK WHERE taskid=?', id ,(err , res ) => {
        if(err) {
            console.log ('error while fetching task id ',err);
            result(null, err);
            
        }else 
        {
            result(null , res);

        }
    })
}

// create new 
task.createnewtask = (taskreqdata , result) =>{
    dbConn.query('INSERT INTO TASK SET ? ' , taskreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('meal added ');
            result(null , {status: true , message : ' task  added ',insertid : res.id})
        }
    })
}

// update task
task.updatetask =(id , taskreqdata , result) => {
    dbConn.query('UPDATE TASK SET studentid=? , trainerid=? , status=? , feedback=?  ,  WHERE taskid =? ') ;
     dbConn.query(query[taskreqdata.studentid, taskreqdata.trainerid, taskreqdata.status, taskreqdata.feedback ,  taskid ], (err,res) => {
        if(err){
        console.log('error while updating task');
        result(null,err);
    }
    else 
    {
        console.log('task  update successfully');
        result(null ,res);
    }
});
}

// delete task
task.deletetask =( id ,result) => {
    dbConn.query('DELETE FROM TASK WHERE taskid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting task');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}





module.exports = task;