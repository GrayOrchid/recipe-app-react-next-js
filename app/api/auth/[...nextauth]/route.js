import User from "@/models/user";
import connect from "@/utils/connectToMongoDB";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


let handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
    ,
    callbacks: {
        async session({ session }) {
            let sessionUser = await User.findOne({
                email: session.user.email
            })
            session.user.id = sessionUser._id.toString()
            return session
        },
        async signIn({ profile }) {
            try {
                await connect

                let useExist = await User.findOne({
                    email: profile.email
                })

                if (!useExist) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replaceAll(" ", "").toLowerCase(),
                        image: profile.picture,
                        createdBy: [],
                        favorite: [],

                    })
                }
                return true
            } catch (error) {
                console.log(error);
                return false
            }
        }
    }

})
export { handler as GET, handler as POST }