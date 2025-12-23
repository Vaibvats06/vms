import express from 'express'
const routes=express.Router()
import {addProduct} from '../controllers/product.controller.js'
import {searchProduct} from '../controllers/product.controller.js'

routes.post('/add',addProduct);
routes.get('/search',searchProduct);



export default routes;