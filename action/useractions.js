"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
// import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    let options = {

        amount: parseInt(amount) * 100,
        // amount: Number.parseInt(amount),
        currency: "INR",
    }
    let order = await instance.orders.create(options)

    // Create a paayment object which show a pending payment in the database
    await Payment.create({
        oid: order.id,
        amount: amount,
        to_user: to_username,
        name: paymentform?.name || "paymentform name not found",
        message: paymentform?.message || "also message not found",
        done: false
    })

    return order

}
