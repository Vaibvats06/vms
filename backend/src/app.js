import express from 'express'
import routes from './routes/user.auth.js';
import productRoutes from './routes/product.route.js';
import requirementRoutes from './routes/requirement.route.js'

import cors from 'cors'
const app=express();
app.use(express.json());
app.use(cors())


app.use("/api/user/",routes)
app.use("/api/product",productRoutes)
app.use("/api/requirements",requirementRoutes)




export default app;