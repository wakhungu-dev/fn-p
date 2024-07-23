// // pages/api/auth/signup.ts

// import User from '@/libs/models/user';
// import { mongoDbConnection } from '@/libs/mongoDb';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import bcrypt from 'bcryptjs';

// type Data = {
//     message: string;
//     error?: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     const { email, password, name } = req.body;

//     // Validate input
//     if (!email || !password || !name) {
//         return res.status(400).json({ message: 'Please provide all required fields.' });
//     }

//     try {
//         await mongoDbConnection();

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists.' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new User({
//             email,
//             name,
//             password: hashedPassword,
//         });

//         await newUser.save();

//         return res.status(201).json({ message: 'User created successfully' });
//     } catch (error: any) {
//         console.error('Error creating user:', error);
//         return res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// }
