"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
// import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useRouter } from 'next/navigation'
import { notFound } from "next/navigation"


const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {

            toast.success('Thanks for your donation!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            router.push(`/${username}`)
        }
    }, [])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }


    const pay = async (amount) => {
        // Get the order Id

        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "/Profile.svg", // logo here
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Praveen Kumar", //your customer's name
                "email": "bishnoipraveen8809@gmail.com",
                "contact": "+900000000000" //Provide the customer's phone number for better conversion rates 
            },
            "theme": {
                "color": "#3399cc"
            },
            modal: {
                ondismiss: function () {
                    alert("Payment failed, retry");
                }
            },

        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover relative w-full flex items-center justify-start md:justify-center ' >
                <img className="object-cover w-full h-full md:h-full"
                    src={currentUser?.coverpic || "/BG-Default.jpg"} alt="" />
                <div className="absolute -bottom-8 md:-bottom-16  border-white overflow-hidden border-[1px] md:border-2 size-16 md:size-32 rounded-full ml-5 md:ml-0">
                    <img className='rounded-full object-cover size-16 md:size-32 ' src={currentUser?.profilepic || "/Profile.svg"} alt="profile pic" />
                </div>
            </div>
            <div className="flex items-center justify-center mt-16 flex-col text-center">
                <div className='font-bold text-lg mx-2'>
                    Lets help
                    <span className='font-bold'> @{username}</span> get a chai ☕️
                </div>
                <div className='text-slate-300 mx-2'>
                    <div className='mx-2'>
                        {payments.length} Payment from our Supporters. {currentUser.name} is raising funds for a chai. Lets help him reach his goal!.
                    </div>
                    <div className='mx-2'>
                        {payments.length} • members • 107 posts • {payments.reduce((a, b) => a + b.amount, 0)}₹ raised so far.
                    </div>
                </div>


                <div className="payment flex gap-3 w-[85%] my-8 flex-col md:flex-row">
                    <div className="supp w-full md:w-1/2 bg-slate-900 rounded-lg p-5 sm:p-10">

                        {/* SHow list of all the Supporters as a leaderboard */}
                        <h2 className='text-2xl text-center font-bold mb-5'>Top 10 Supporters</h2>
                        <ul className='flex flex-col items-start '>
                            {payments.length == 0 && <li className='text-center text-slate-100'>No payments yet. Be the first one to support!</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className="flex my-2 gap-1 items-start md:items-center text-start">
                                    < img width={33} src="avatar.gif" alt="user avatar" />
                                    <span>{p.name} donated<span className='font-bold'> ₹{p.amount} </span>with a message "{p.message}"</span></li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg p-5 sm:p-10">
                        <h2 className='text-2xl font-bold mb-5'>Make a payment</h2>


                        <div className="flex gap-2 flex-col">
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />

                            <div className="flex flex-col sm:flex-row gap-2">
                                <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />
                                <button onClick={() => pay(paymentform.amount)} type="button" className="text-white font-bold text-2xl hover:bg-purple-600 bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg sm:px-4 sm:ml-2 py-2.5 text-center leading-5 disabled:bg-[#D0342C] disabled:hover:text-red-500 w-full sm:w-32 m-0 " disabled={paymentform.amount <= 0 || paymentform.message.length < 3} >Pay</button>
                            </div>

                        </div>

                        {/* Or chose from these Amount */}
                        <div className="flex w-full gap-2 mt-5">
                            <button className="bg-slate-800 rounded-lg disabled:bg-[#D0342C] disabled:hover:text-red-500 w-1/3 p-0 sm:p-3 h-12 sm:h-full" disabled={paymentform.name.length <= 2 || paymentform.message.length < 3} onClick={() => pay(10)} >Pay ₹10 </button>
                            <button className="bg-slate-800 rounded-lg disabled:bg-[#D0342C] disabled:hover:text-red-500 w-1/3 p-0 sm:p-3 h-12 sm:h-full" disabled={paymentform.name.length <= 2 || paymentform.message.length < 3} onClick={() => pay(20)} >Pay ₹20 </button>
                            <button className="bg-slate-800 rounded-lg disabled:bg-[#D0342C] disabled:hover:text-red-500 w-1/3 p-0 sm:p-3 h-12 sm:h-full" disabled={paymentform.name.length <= 2 || paymentform.message.length < 3} onClick={() => pay(30)} >Pay ₹30 </button>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default PaymentPage
