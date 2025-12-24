import express from 'express'
const routes=express.Router()
import {addProduct} from '../controllers/product.controller.js'
import {searchProduct,getProductByName,modifyProductqty,confirmOrderRecieved
} from '../controllers/product.controller.js'
// for add product in database
routes.post('/add',addProduct);
// for add product from database i.e check price and all
routes.get('/search',searchProduct);
// for search product by name and create order with min rate dealer
routes.post('/searchByName',getProductByName);
// for modify order qty if already exists
routes.post('/modifyQty',modifyProductqty);
// for confirm order recieved and reduce qty from product database
routes.post('/order-recieved',confirmOrderRecieved);



export default routes;