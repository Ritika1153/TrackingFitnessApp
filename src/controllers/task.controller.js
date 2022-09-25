const taskModel = require ('../models/task.model');
const task = require('../models/task.model');

// gel all the  list 
exports.gettaskList = (req , res) => {
    
    taskModel.getalltask((err,task)=> {
         console.log('we re here');
         if (err)
         res.send(err);
         console.log('task', task);
         res.send(task);
         })
 }


 //get task by id
exports.gettaskbyid = (req,res) => {
  
    taskModel.gettaskbyid(req.params.id,(err,task) =>{
     if(err)
     res.send(err);
     console.log('single task data' , task);
     res.send(task);
 }) 
 }

 //create new task 
exports.createnewtask = (req , res ) => {
  const taskreqdata = new taskModel (req.body);
  console.log ('req data' , req.body);
  
  //checking null
  if (req.body.contructor === Object && object(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
    taskModel.createnewtask(taskreqdata, (err , task ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'task added successfully', data: task.id })
  })
}
}

// update task
exports.updatetask = (req , res) =>{
  const taskreqdata =new taskModel (req.body);
  console.log ('taskreqdata update ' , taskreqdata);
  
  //checking null
  if (req.body.contructor === Object && object.keys(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
    taskModel.updatetask( req.params.id,taskreqdata, (err , task ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'task updated successfully',  })
  })
}
}

// delete task
exports.deletetask= (req , res) => {
    taskModel.deletetask(req.params.id , (err , task ) => {
      if(err)
      
          res.send(err);
          res.json({ success : true , message :'task deleted successfully'});
      }); 
}