import app from './src/app.js'
import { connectDB } from "./node_js_project/config/db.js"
import { config } from "./config/index.js";


connectDB().then (()=>app.listen(config.port,()=>{
    console.log(`server running on https://localhost:${config.port}`)  

}))