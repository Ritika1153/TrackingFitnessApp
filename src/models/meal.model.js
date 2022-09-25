var dbConn = require ('../../config/db.config');

var meal = function(meal ) {
    this.dietid = meal.dietid;
    this.breakfast = meal.breakfast;
    this.lunch = meal.lunch;
    this.dinner = meal.dinner;
    this.calories = meal.calories;
}


//get all meal
meal.getallmeal = (result) =>{
    dbConn.query('SELECT * FROM MEAL',(err,res) => {
        if(err){
            console.log('error while fetching meal' , err);
            result(null, err);
        } else
        {
            console.log('meal fetched successfully');
            result(null,res);
        }

    })
}

//get meal by id
meal.getmealbyid = (id , result) =>  {
    dbConn.query('SELECT * FROM MEAL WHERE dietid=?', id ,(err , res ) => {
        if(err) {
            console.log ('error while fetching meal id ',err);
            result(null, err);
            
        }else 
        {
            result(null , res);

        }
    })
}

// create new meal
meal.createmeal = (mealreqdata , result) =>{
    dbConn.query('INSERT INTO MEAL SET ? ' , mealreqdata , (err , res)=> {
        if(err){
            console.log ('error while inserting data ');
            result(null , {status : false , message : err});
        }
        else {
            console.log ('meal added ');
            result(null , {status: true , message : 'meal  added ', insertid : res.id})
        }
    })
}

// update meal
meal.updatemeal =(id , mealreqdata , result) => {
    dbConn.query('UPDATE MEAL SET breakfast=? , lunch=? , dinner=? , calories=?  ,  WHERE dietid =? ') ;
     dbConn.query(query[mealreqdata.breakfast, mealreqdata.lunch, mealreqdata.dinner, mealreqdata.calories ,  dietid ], (err,res) => {
        if(err){
        console.log('error while updating meal');
        result(null,err);
    }
    else 
    {
        console.log('meal update successfully');
        result(null ,res);
    }
});
}

// delete meal
meal.deletemeal =( id ,result) => {
    dbConn.query('DELETE FROM MEAL WHERE dietid =? ', [id] , (err , res) => {
        if(err) {
            console.log ('error while deleting meal');
            result(null,err);
        }else{
            result(null , res);
        }
    })
}





module.exports = meal;