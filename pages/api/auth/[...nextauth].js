import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { doLogin } from '../../../backend/authApi'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const user = {
          email: credentials.email,
          password: credentials.password,
        }

        try {
          const res = await doLogin(user)
          if (res.data.success) {
            const user = {
              username: res.data.user.fullname,
              ...res.data.user,
            }
            console.log(user)
            return user
          }
        } catch (err) {
          throw new Error(err.response.data.message)
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user) {
      console.log('user:', {
        username: user.user.name,
        email: user.user.email,
      })

      return true
    },
  },
  pages: {
    signIn: '/login',
  },
}
export default NextAuth(authOptions)
