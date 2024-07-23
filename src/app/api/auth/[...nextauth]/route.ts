import NextAuth, { NextAuthOptions, CallbacksOptions, Session, User as NextAuthUser, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { mongoDbConnection } from '@/libs/mongoDb';
import User from '@/libs/models/user';
import { IUser } from '@/types/core';
import { userController } from '@/controllers/UserController';

// Define your user interface if it's not already defined


// Define your session callback interface
interface SessionWithUser extends Session {
  user: IUser;
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      // await mongoDbConnection();
       if(!user){
        return false;
       }  
      const existingUser = await userController.getUserByEmail( user.email as string);

      if (!existingUser) {
      await userController.createUser({
        email: user.email,
        name: user.name,
        image: user.image,
      });
      }

      await userController.updateUser( existingUser._id, {
        name: user.name,
        image: user.image,
      });
      return true;
    },
    session: async ({ session, token }) => {
      // await mongoDbConnection();
      return session;
      const dbUser = await userController.getUserByEmail(token.email as string);

      if (dbUser) {
        // session?.user
        (session as SessionWithUser).user.id = dbUser._id;
      }

      return session as SessionWithUser;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };