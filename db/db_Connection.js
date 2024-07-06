import mongoose from "mongoose";
export const dbConnection= ()=>{
    mongoose.connect(`mongodb+srv://Bookify:Bookify@cluster0.49gv7u0.mongodb.net/schoolManagementSystem`)
    .then(()=>console.log("mongo Database connected successfully"))
    .catch((err)=>{
        console.log("Database connected error",err)
    })
}
