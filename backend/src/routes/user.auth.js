import express from 'express'
import { userRegister,userLogin } from '../controllers/user.controller.js';
const routes=express.Router();


routes.post('/register',userRegister)
routes.post('/login',userLogin)

export default routes;