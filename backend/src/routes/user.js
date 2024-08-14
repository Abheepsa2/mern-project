import express from 'express';
import UserController from"../controller/userController.js";

const UserRoute=express.Router();
const uc=new  UserController();

UserRoute.get('/',uc.index);
UserRoute.post('/',uc.create);


export default UserRoute;