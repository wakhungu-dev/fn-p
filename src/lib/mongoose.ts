import mongoose from "mongoose";

export async function mongooseConnect(){
    try {
       await mongoose.connect(process.env.NEXT_MONGODB_URI as string) 
       console.log("MongoDB connected successfully.")
    } catch (error) {
        console.error("MongoDB connection error:", error);
        
    }

  
}