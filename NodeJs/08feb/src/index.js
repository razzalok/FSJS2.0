import mongoose from "mongoose";
import app from "./app.js"

(async()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/ecomm")
       console.log("DB CONNECTED !");

       app.on('error',(err)=>{
        console.log("ERROR: ",err);
        throw err
       })

       const onListening = ()=>{
        console.log(`Listening on port 5000`);
       }
       app.listen(5000,onListening)
    } catch (err) {
            console.error("ERROR: ",err)
            throw err    
    }
})()