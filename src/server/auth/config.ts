import { type DefaultSession, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "../db";
import { user } from "../db/schema";
import { eq, or } from "drizzle-orm";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            // ...other properties
            // role: UserRole;
        } & DefaultSession["user"];
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
    providers: [
        /**
         * ...add more providers here.
         *
         * Most other providers require a bit more work than the Discord provider. For example, the
         * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
         * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
         *
         * @see https://next-auth.js.org/providers/github
         */
        Credentials({
            name: "2FA_credentials",
            credentials: {
                emailOrMobile: { label: "Email or Mobile number", type: "text" },
                otp: { label: "OTP", type: "text" }
            },
            async authorize(credentials, _) {
                const emailOrNum = credentials.emailOrMobile as string
                const User = (await db.select().from(user)
                    .where(
                        or(
                            eq(user.email, emailOrNum),
                            eq(user.number, BigInt(emailOrNum))
                        )
                    ))[0]

                if (User && Number(credentials.otp as string) === User.OTP) {
                    return { id: User.id, email: User.email }
                }

                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile?.id
            }
            return token
        },
        async session({ session,token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.sessionToken = token.accessToken as string
            session.user.id = user.id
            return session
        }
    },
    pages:{
        signIn:"/signin",
    }
} satisfies NextAuthConfig;
