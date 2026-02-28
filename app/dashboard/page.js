"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
    }, [session, router])
    return (
        <>
            <div className="my-14 flex flex-col w-full h-full">
                <h2 className='mx-auto font-bold text-4xl'>Welcome to your Dashboard</h2>
                <form className="w-[50%] mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input type="text" id="name" className="bg-[#1e2734] border text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Your Name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input type="email" id="email" className="bg-[#1e2734] border text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input type="text" id="username" className="bg-[#1e2734] border text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Username" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                        <input type="password" id="password" className="bg-[#1e2734] border rounded-lg text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="text-white bg-[#145dfc] rounded-lg box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Dashboard
