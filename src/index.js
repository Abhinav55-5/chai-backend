import express from "express";
import connectDB from "./db/index.js";

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});




// import express from 'express';

// const app = express(); 

// (async ()=>{
//    try {
//    await  mongoose.connect(`${process.env.MONGO_URI} / ${DB_NAME}`);
//    app.on('error', (err) => {
//     console.log("error",err);
//     throw err;
//    })
//    app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//    })
   
// }catch (error) {
//     console.log("error",error);
//     throw error;
//    }
// })()