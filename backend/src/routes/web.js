import express from 'express';
import UserRoute from './user.js';
import AuthRoute from './auth.js';
const webRoute=express.Router();


webRoute.get('/',(req,res)=>{
    res.json({message:"Application is ready"});
});

webRoute.use('/auth',AuthRoute);
webRoute.use('/users',UserRoute);
export default webRoute;