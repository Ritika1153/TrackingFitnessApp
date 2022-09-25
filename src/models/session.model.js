var dbConn = require ('../../config/db.config');

var session = function(session  ) {
    this.studentid = session.studentid;
    this.trainerid = session.trainerid;
    this.videos = session.videos;
}


//get all 
session.getallsession = (result) =>{
    dbConn.query('SELECT * FROM SESSION',(err,res) => {
        if(err){
            console.log('error while fetching session' , err);
            result(null, err);
        } else
        {
            console.log('session fetched successfully');
            result(null,res);
        }

    })
}

//get  by id
session.getsessionbyid = (id , result) =>  {
    dbConn.query('SELECT * FROM SESSION WHERE studentid=?', id ,(err , res ) => {
        if(err) {
            console.log ('error while fetching  id ',err);
            result(null, err);
            
        }else 
        {
            result(null , res);

        }
    })
}

// create new 
session.createsession = (sessionreqdata , result) =>{
    dbConn.query('INSERT INTO SESSION SET ? ' , sessionreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('data added ');
            result(null , {status: true , message : ' session added',  insertid : res.id})
        }
    })
}

// update 
session.updatesession =(id , sessionreqdata , result) => {
    dbConn.query('UPDATE SESSION SET trainerid=? , videos=?,  WHERE studentid =? ') ;
     dbConn.query(query[sessionreqdata.trainerid , sessionreqdata.videos, studentid ], (err,res) => {
        if(err){
        console.log('error while updating session');
        result(null,err);
    }
    else 
    {
        console.log('session update successfully');
        result(null ,res);
    }
});
}

// delete diet
session.deletesession =( id ,result) => {
    dbConn.query('DELETE FROM SESSION WHERE studentid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting session');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}





module.exports = session;