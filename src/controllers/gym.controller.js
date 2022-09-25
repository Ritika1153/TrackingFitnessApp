const gymModel = require ('../models/gym.model');
const gym = require('../models/gym.model');

// gel all the student list 
exports.getgymList = (req , res) => {
    
  gymModel.getallgym((err,gym)=> {
         console.log('we re here');
         if (err)
         res.send(err);
         console.log('gym', gym);
         res.send(gym)
         })
 }


 //get gym by id
exports.getgymbyid = (req,res) => {
  //   console.log('get students by id');
 gymModel.getgymbyid(req.params.id,(err,gym) =>{
     if(err)
     res.send(err);
     console.log('single gym data' , gym);
     res.send(gym);
 }) 
 }

 //create new gym
exports.createnewgym = (req , res ) => {
  const gymreqdata = new gymModel (req.body);
  console.log ('req data' , req.body);
  
  //checking null
  if (req.body.contructor === Object && object(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
  gymModel.gymstudent(gymreqdata, (err , gym ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'gym added successfully', data: gym.id })
  })
}
}

// update gym
exports.updategym = (req , res) =>{
  const gymreqdata =new gymModel (req.body);
  console.log ('gymreqdata update ' , gymreqdata);
  
  //checking null
  if (req.body.contructor === Object && object.keys(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
  gymModel.updategym( req.params.id,gymreqdata, (err , gym ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'gym updated successfully',  })
  })
}
}

// delete gym 
exports.deletegym= (req , res) => {
  gymModel.deletegym (req.params.id , (err , gym ) => {
      if(err)
      
          res.send(err);
          res.json({ success : true , message :'gym deleted successfully'});
      }); 
}