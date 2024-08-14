import express from 'express';
const AuthRoute =express.Router();


AuthRoute.get('/',function(req,res){
return res.json({message:"login route"});
});


AuthRoute.get('/register',function(req,res){
    return res.json({message:"register  route"});
    });
    

export default AuthRoute;
