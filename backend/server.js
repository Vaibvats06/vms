import server from "./src/app.js";
import dotenv from 'dotenv';
dotenv.config()
import { DbConnection } from "./src/config/DbConnection.js";


DbConnection()
server.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})



