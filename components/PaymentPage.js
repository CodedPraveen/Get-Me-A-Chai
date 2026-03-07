"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/action/useractions'
// import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({})

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }


    const pay = async (amount) => {
        // Get the order Id
        
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+900000000000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover relative w-full' >
                <img className='object-cover w-full h-[350]'
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/20.gif?token-hash=81uhFp0MW20Qivf1LInhJegiH8RHtwe14ZvuDKLj4RU%3D&token-time=1772582400" alt="" />
                <div className="absolute -bottom-14 right-[46%] rounded-full">
                    <img width={120} height={120} className='rounded-full border-2 border-white ' src="/profile2.jpg" alt="profile pic" />
                </div>
            </div>
            <div className="flex items-center justify-center mt-16 flex-col text-center">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-300'>
                    <div>
                        Creating Animated art for VTT's
                    </div>
                    <div>
                        23,210 • members • 107 posts • $18,370/release
                    </div>
                </div>
                <div className="payment flex gap-3 w-[85%] my-8">
                    <div className="supp w-1/2 bg-slate-900 rounded-lg p-10">

                        {/* SHow list of all the Supporters as a leaderboard */}
                        <h2 className='text-2xl text-center font-bold mb-5'>Supporters</h2>
                        <ul className='flex flex-col items-start '>
                            <li className="flex my-2 gap-1 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>Shubham donated<span className='font-bold'> $30 </span>with a message "I Support you bro. Lots of ❤️"</span></li>
                            <li className="flex my-2 gap-1 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>Shubham donated<span className='font-bold'> $30 </span>with a message "I Support you bro. Lots of ❤️"</span></li>
                            <li className="flex my-2 gap-1 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>Shubham donated<span className='font-bold'> $30 </span>with a message "I Support you bro. Lots of ❤️"</span></li>
                            <li className="flex my-2 gap-1 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>Shubham donated<span className='font-bold'> $30 </span>with a message "I Support you bro. Lots of ❤️"</span></li>
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
                        <h2 className='text-2xl font-bold mb-5'>Make a payment</h2>

                        <div className="flex gap-2 flex-col">
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />

                            <div className="flex ">
                                <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />
                                <button type="button" className="text-white from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 ml-2 py-2.5 text-center leading-5 ">Pay</button>
                            </div>

                        </div>
                        {/* Or chose from these Amount */}
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(10)} >Pay ₹10 </button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(20)} >Pay ₹20 </button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(30)} >Pay ₹30 </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PaymentPage
