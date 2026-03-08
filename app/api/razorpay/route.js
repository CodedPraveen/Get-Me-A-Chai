import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    console.log("Body:", body)
    console.log("Searching Order:", body.razorpay_order_id)

    // Check if razorpayOrderId is present on the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    console.log("Payment Found:", p)
    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not found" })
    }
    // Verify the payment 
    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, process.env.RAZORPAY_KEY_SECRET)

    if (xx) {
        // Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    } else {
        return NextResponse.json({ success: false, message: "Payment verification Failed" })
    }

}
