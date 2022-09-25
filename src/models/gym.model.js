var dbConn = require ('../../config/db.config');

var gym = function(gym ) {
    this.gymid = gym.gymid;
    this.gymname= gym.gymname;
    this.website=gym.website;
    this.address= gym.address;
    this.contact= gym.contact;
    this.rating= gym.rating;
    this.starttiming=gym.starttiming;
    this.endtiming= gym.endtiming;
    this.descript= gym.descript;
    this.trainerid= gym.trainerid;
}

//get all gym
gym.getallgym = (result) =>{
    dbConn.query('SELECT * FROM GYM',(err,res) => {
        if(err){
            console.log('error while fetching gym' , err);
            result(null, err);
        } else
        {
            console.log('gym fetched successfully');
            result(null,res);
        }

    })
}

//get gym by id
gym.getgymbyid = (id , result) =>  {
    dbConn.query('SELECT * FROM GYM WHERE gymid=?', id ,(err , res ) => {
        if(err) {
            console.log ('error while fetching gym id ',err);
            result(null, err);
            
        }else 
        {
            result(null , res);

        }
    })
}

// create new gym 
gym.gymstudent = (gymreqdata , result) =>{
    dbConn.query('INSERT INTO GYM SET ? ' , gymreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('gym added ');
            result(null , {status: true , message : 'gym added',insertid : res.id})
        }
    })
}

// update gym
gym.updatestudent =(id , gymreqdata , result) => {
    dbConn.query('UPDATE STUDENT SET gymname=? , website=? , address=? , contact=?  , starttiming=? , endtiming=? , descript=? , trainerid=? ,  WHERE gymid =? ') ;
     dbConn.query(query[gymreqdata.gymname, gymreqdata.website, gymreqdata.address, gymreqdata.contact , gymreqdata.starttiming , gymreqdata.endtiming , gymreqdata.descript , gymreqdata.trainerid, gymid ], (err,result) => {
        if(err){
        console.log('error while updating gym');
        result(null,err);
    }
    else 
    {
        console.log('gym update successfully');
        result(null ,res);
    }
});
}

// delete gym
gym.deletegym =( id ,result) => {
    dbConn.query('DELETE FROM GYM WHERE gymid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting gym');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}





module.exports = gym;