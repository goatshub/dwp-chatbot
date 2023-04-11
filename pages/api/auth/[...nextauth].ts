import NextAuth, { Account, Profile } from "next-auth"
import GoogleProvider  from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
        GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ account, profile }: { account: Account, profile?: Profile | undefined }){
      if (account.provider === "google") {
        return profile?.email_verified && profile?.email?.endsWith("@dwp.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }

}

export default NextAuth(authOptions)