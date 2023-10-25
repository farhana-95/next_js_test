
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

   const authOptions: NextAuthOptions ={
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Email", type: "text", placeholder: "enter email" },
            password: { label: "Password", type: "password", placeholder: "enter password" }
          },
          async authorize(credentials, req) {
            const user = { id: "1", name: "one", email: "one@example.com", password:"1111" }
      
            if (user) {
              return user
            } else {
              return null
                  }
          }
        })
      ]
   }


export default NextAuth(authOptions)