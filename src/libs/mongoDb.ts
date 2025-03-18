import mongoose from 'mongoose';

export const mongoDbConnection = async () => {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI !;
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 3000,
            socketTimeoutMS: 3000,
        })
        console.log('Connected to MongoDB')

        
    } catch (error: any) {
        console.error('Error connecting to MongoDB:', error)
        
    }
};
