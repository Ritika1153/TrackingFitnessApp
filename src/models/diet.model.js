var dbConn = require ('../../config/db.config');

var diet = function(diet  ) {
    this.dietid = diet.dietid;
    this.dietname = diet.dietname;
}


//get all diet
diet.getalldiet = (result) =>{
    dbConn.query('SELECT * FROM DIET',(err,res) => {
        if(err){
            console.log('error while fetching diet' , err);
            result(null, err);
        } else
        {
            console.log('diet fetched successfully');
            result(null,res);
        }

    })
}

//get diet by id
diet.getdietbyid = (id , result) =>  {
    dbConn.query('SELECT * FROM DIET WHERE dietid=?', id ,(err , res ) => {
        if(err) {
            console.log ('error while fetching  id ',err);
            result(null, err);
            
        }else 
        {
            result(null , res);

        }
    })
}

// create new diet
diet.creatediet = (dietreqdata , result) =>{
    dbConn.query('INSERT INTO DIET SET ? ' , dietreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('data added ');
            result(null , {status: true , message : ' diet added',insertid : res.id})
        }
    })
}

// update diet
diet.updatediet =(id , dietreqdata , result) => {
    dbConn.query('UPDATE DIET SET dietname=? ,  WHERE dietid =? ') ;
     dbConn.query(query[dietreqdata.dietname , dietid ], (err,res) => {
        if(err){
        console.log('error while updating diet');
        result(null,err);
    }
    else 
    {
        console.log('diet update successfully');
        result(null ,res);
    }
});
}

// delete diet
diet.deletediet =( id ,result) => {
    dbConn.query('DELETE FROM DIET WHERE dietid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting diet');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}





module.exports = diet;