## Folder Structure

1. server.js
   database connection is call from src/config/DbConnection.js folder
   app call from src/app.js

2. In App.js 

app.use("/api/user/",routes) -->user
app.use("/api/product",productRoutes)  -->product
app.use("/api/requirements",requirementRoutes)   -->requirement

add-ons

app.use("/api/orders",orderRoutes)   -->order


### sub-folder of user
routes.post('/register',userRegister)    -->{fullname, email, password}
routes.post('/login',userLogin)          -->{email, password}

### sub-folder of product 

// for add product from database      -->{productName,exp,mrp,rate,seller,rack}
routes.post('/add',addProduct);


//search all product for frontend and redux 
routes.get('/search',searchProduct);

routes.post('/searchByName',getProductByName);
// for modify order qty if already exists
routes.post('/modifyQty',modifyProductqty);
// for confirm order recieved and reduce qty from product database
routes.post('/order-recieved',confirmOrderRecieved);