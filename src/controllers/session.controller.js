const sessionModel = require ('../models/session.model');
const session = require('../models/session.model');
const student = require('../models/student.model');

// gel all the session list 
exports.getsessionList = (req , res) => {
    
    sessionModel.getallsession((err,session)=> {
         console.log('we re here');
         if (err)
         res.send(err);
         console.log('session', session);
         res.send(session);
         })
 }


 //get session by id
exports.getsessionbyid = (req,res) => {
  
    sessionModel.getsessionbyid(req.params.id,(err,session) =>{
     if(err)
     res.send(err);
     console.log('single session data' , session);
     res.send(session);
 }) 
 }

 //create new session
exports.createnewsession = (req , res ) => {
  const sessionreqdata = new sessionModel (req.body);
  console.log ('req data' , req.body); 
  
  //checking null
  if (req.body.contructor === Object && object(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
    sessionModel.createsession(sessionreqdata, (err , session ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'session added successfully', data: session.id })
  })
}
}

// update session
exports.updatesession = (req , res) =>{
  const sessionreqdata =new sessionModel (req.body);
  console.log ('sessionreqdata update ' , sessionreqdata);
  
  //checking null
  if (req.body.contructor === Object && object.keys(req.body).length ===0){
      res.send (400).send({ success : false , message : ' please fill all fields'});
  }
  else { 
    sessionModel.updatesession( req.params.id,sessionreqdata, (err , session ) => {
      if(err)
      res.send(err);
      res.json ({status : true , message : 'session updated successfully',  })
  })
}
}

// delete session
exports.deletesession= (req , res) => {
   sessionModel.deletesession (req.params.id , (err , session ) => {
      if(err)
      
          res.send(err);
          res.json({ success : true , message :'session deleted successfully'});
      }); 
}