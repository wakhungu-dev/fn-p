// pages/api/admin/updateRole.ts
import User from '@/libs/models/user';
import { mongoDbConnection } from '@/libs/mongoDb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ensure the method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get the session
  const session = await getSession({ req });
  if (!session || !session.user || (session.user as { role?: string }).role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  // Parse request body
  const { email, role } = req.body;

  // Validate inputs
  if (!email || !role) {
    return res.status(400).json({ message: 'Email and role are required' });
  }

  // Connect to the database
  await mongoDbConnection();

  try {
    // Find the user and update their role
    const user = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Role updated successfully', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
