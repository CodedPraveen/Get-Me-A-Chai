
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDB';

const authoptions = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                }
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],

    callbacks: {

        async signIn({ user }) {
            await connectDB()

            if (!user.email) return true

            const currentUser = await User.findOne({ email: user.email })

            if (!currentUser) {
                const newUser = new User({
                    email: user.email,
                    username: user.email.split("@")[0],
                })
                await newUser.save()
            }

            return true
        },

        async session({ session, token }) {
            await connectDB()

            if (!session.user?.email) return session

            const dbUser = await User.findOne({ email: session.user.email })

            if (dbUser) {
                session.user.name = dbUser.username
            }

            return session
        },

        async redirect({ url, baseUrl }) {
            return baseUrl   // ✅ FIX for #_=_
        }

    }

})
export { authoptions as GET, authoptions as POST }
