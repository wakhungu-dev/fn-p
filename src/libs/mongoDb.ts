import mongoose from 'mongoose';

export const mongoDbConnection = async () => {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
        throw new Error('MONGO_URI is not defined');
    }
    
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    
    return await mongoose.connect(uri);
};
