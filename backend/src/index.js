import express from 'express';
import dotenv from  'dotenv';
import webRoute from './routes/web.js';

dotenv.config();

const app =express();
app.use(webRoute);
let mode=process.env.MODE;
if(mode==="Development"){
console.log(mode);
 const port =process.env.port || 3000 ;
//  console.log(port);
app.listen(port,()=>{
    console.log(`port running in port http://127.0.0.1 ${port}`);
});
}else{
    console.log("Server running in production mode");
}