"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
import User from "@/models/User"



export const initiate = async (amount, to_username, paymentform, razorpayid, razorpaysecret) => {
    await connectDB()
    // fetch the secrret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret

    const instance = new Razorpay({
        key_id: user.razorpayid,
        key_secret: secret,
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
        done: false,
        razorpayid: user.razorpayid,
        razorpaysecret: secret,
    })

    return order

}


export const fetchuser = async (username) => {
    await connectDB()

    const u = await User.findOne({ username: username })

    if (!u) {
        return null
    }

    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    // Find all payment sorted by decreasing order of amount and flatten object id
    const p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p.map(p => ({
        ...p,
        _id: p._id.toString()
    }))
}

export const fetchCreators = async (search = "") => {
    await connectDB()

    const normalizedSearch = String(search || "").trim()
    const userFilter = normalizedSearch
        ? {
            $or: [
                { username: { $regex: normalizedSearch, $options: "i" } },
                { name: { $regex: normalizedSearch, $options: "i" } }
            ]
        }
        : {}

    const users = await User.find(userFilter)
        .select("username name profilepic")
        .sort({ createdAt: -1 })
        .limit(50)
        .lean()

    if (users.length === 0) return []

    const usernames = users.map((u) => u.username)
    const earnings = await Payment.aggregate([
        { $match: { to_user: { $in: usernames }, done: true } },
        {
            $group: {
                _id: "$to_user",
                totalRaised: { $sum: "$amount" },
                supporters: { $sum: 1 }
            }
        }
    ])

    const earningMap = new Map(
        earnings.map((e) => [e._id, { totalRaised: e.totalRaised || 0, supporters: e.supporters || 0 }])
    )

    return users.map((u) => ({
        username: u.username,
        name: u.name || u.username,
        profilepic: u.profilepic || "/Profile.svg",
        totalRaised: earningMap.get(u.username)?.totalRaised || 0,
        supporters: earningMap.get(u.username)?.supporters || 0
    }))
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    // If the username is being updated, check if the new username is already taken
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already taken" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the username in the payments table
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    } else {
        await User.updateOne({ email: ndata.email }, ndata)
    }
    return { success: true }
}