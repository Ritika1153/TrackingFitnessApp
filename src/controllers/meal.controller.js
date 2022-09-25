const mealModel = require ('../models/meal.model');
const meal = require('../models/meal.model');

// gel all the meal list 
exports.getmealList = (req , res) => {
    
  mealModel.getallmeal((err,meal)=> {
         console.log('we re here');
         if (err)
         res.send(err);
         console.log('meal', meal);
         res.send(meal)
         })
 }


 //get meal by id
exports.getmealbyid = (req,res) => {
  
 mealModel.getmealbyid(req.params.id,(err,meal) =>{
     if(err)
     res.send(err);
     console.log('single meal data' , meal);
     res.send(meal);
 }) 
 }

 //create new meal
exports.createnewmeal = (req , res ) => {
  const mealreqdata = new mealModel (req.body);
  console.log ('req data' , req.body);
  
  //checking null
  if (req.body.contructor === Object && object(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
  mealModel.createmeal(mealreqdata, (err , meal ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'meal added successfully', data: meal.id })
  })
}
}

// update meal
exports.updatemeal = (req , res) =>{
  const mealreqdata =new mealModel (req.body);
  console.log ('mealreqdata update ' , mealreqdata);
  
  //checking null
  if (req.body.contructor === Object && object.keys(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
  mealModel.updatemeal( req.params.id,mealreqdata, (err , meal ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'meal updated successfully',  })
  })
}
}

// delete meal
exports.deletemeal= (req , res) => {
  mealModel.deletemeal (req.params.id , (err , meal ) => {
      if(err)
      
          res.send(err);
          res.json({ success : true , message :'meal deleted successfully'});
      }); 
}