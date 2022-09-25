const dietModel = require ('../models/diet.model');
const diet = require('../models/diet.model');

// gel all the diet list 
exports.getdietList = (req , res) => {
    
  dietModel.getalldiet((err,diet)=> {
         console.log('we re here');
         if (err)
         res.send(err);
         console.log('diet', diet);
         res.send(diet);
         })
 }


 //get diet by id
exports.getdietbyid = (req,res) => {
  
 dietModel.getdietbyid(req.params.id,(err,diet) =>{
     if(err)
     res.send(err);
     console.log('single diet data' , diet);
     res.send(diet);
 }) 
 }

 //create new diet 
exports.createnewdiet = (req , res ) => {
  const dietreqdata = new dietModel (req.body);
  console.log ('req data' , req.body);
  
  //checking null
  if (req.body.contructor === Object && object(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
  dietModel.creatediet(dietreqdata, (err , diet ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'diet added successfully', data: diet.id })
  })
}
}

// update diet
exports.updatediet = (req , res) =>{
  const dietreqdata =new dietModel (req.body);
  console.log ('dietreqdata update ' , dietreqdata);
  
  //checking null
  if (req.body.contructor === Object && object.keys(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
  dietModel.updatediet( req.params.id,dietreqdata, (err , diet ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'diet updated successfully',  })
  })
}
}

// delete diet
exports.deletediet= (req , res) => {
  dietModel.deletediet (req.params.id , (err , diet ) => {
      if(err)
      
          res.send(err);
          res.json({ success : true , message :'diet deleted successfully'});
      }); 
}