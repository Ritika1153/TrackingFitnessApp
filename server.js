//import express from "express";
//import bodyParser from "body-parser";
const express = require ('express');
const bodyParser = require('body-parser');
 
// create express app
 const app = express();

 // setup port
 const PORT =  process.env.PORT || 3000;
 //parse request data content type application
 app.use(bodyParser.urlencoded({extended : false}));

 //parse request data content type application / json 
 app.use(bodyParser.json());
 


 //define root route
app.get ('/' , (_req, res)=>{
res.send('successfully created');
});
 //import student routes
const studentRoutes = require('./src/routes/student.route');

//create student routes
app.use('/student',studentRoutes);

// import gym routes
const gymRoutes = require ('./src/routes/gym.route');

//create gym route
app.use('/api/v1/gym', gymRoutes);

// import meal routes
const mealRoutes = require ('./src/routes/meal.route');

//create meal route
app.use('/api/v1/meal', mealRoutes);

// import diet routes
const dietRoutes = require ('./src/routes/diet.routes');

//create diet route
app.use('/api/v1/diet' , dietRoutes);

// import session routes
const sessionRoutes = require ('./src/routes/session.route');

//create session route
app.use('/api/v1/session' , sessionRoutes);
// import task routes
const taskRoutes = require ('./src/routes/task.route');

//create task route
app.use('/api/v1/task' , taskRoutes);

//import payment route
const paymentRoutes = require ('./src/routes/payment.route');

//create payment routes
app.use ('./api/v1/task' , paymentRoutes);

//listen to the port
app.listen (PORT, ()=>{
    console.log('express is running at PORT $(PORT)'); 
});




