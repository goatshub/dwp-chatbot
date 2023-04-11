import { Profile } from "next-auth"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Profile {
    /** This is an example. You can find me in types/next-auth.d.ts */
    email_verified: Boolean
  }
}