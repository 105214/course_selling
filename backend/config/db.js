import mongoose from "mongoose"




const DbConnect = async()=>{
    try {
      mongoose.connect (process.env.MONGODB_URL)
      console.log("database connected successfully");
      
    } catch (error) {
        console.log(error)
    }
}

export default DbConnect