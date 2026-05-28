import {connect} from "mongoose"
import {config} from ".";
export async function connectDB(){
try{//לסדר את הסיסמה
    await connect (config.dbUri)
    console.log("Connected to MongoDB");
}
catch(error){
    console.log("MongoDB connection error:", error);
    
}
}