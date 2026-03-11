
import PaymentPage from '@/components/PaymentPage';
import React from 'react'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDB';
import User from '@/models/User';;

const Username = async ({ params }) => {
    const { username } = await params
    //If the username is not present in the database then show 404 page
    await connectDB()
    let u = await User.findOne({ username: username })
    if (!u) {
        return notFound()
    }

    return (
        <>
            <PaymentPage username={username} />
        </>
    )
}

export default Username
