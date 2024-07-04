import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

 const authOptions = {
  
  // google auth
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
  ],
}

const handler = NextAuth(authOptions) 
export { handler as POST, handler as GET}