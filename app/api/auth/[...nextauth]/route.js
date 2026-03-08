
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/models/User';
// import Payment from '@/models/Payment';
import connectDB from '@/db/connectDB';

const authoptions = NextAuth({
    providers: [
        // OAuth authentication providers...
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
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            await connectDB()
            if (!user.email) {
                console.log("GitHub email not found")
                return false
            }
            if (account.provider == "github") {
                // Check if the user already exits in the database
                const currentUser = await User.findOne({ email: user.email })
                if (!currentUser) {
                    const newUser = new User({
                        email: user.email,
                        username: user.email.split("@")[0],
                    })
                    await newUser.save()
                }

                return true
            }
        },
        async session({ session, token, user }) {
            await connectDB()
            const dbUser = await User.findOne({ email: session.user.email })
            console.log(dbUser);
            if (token) {
                session.user.name = dbUser.username
            }
            return session
        }
    }

})
export { authoptions as GET, authoptions as POST }