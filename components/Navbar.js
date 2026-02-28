"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const [showdropdown, setShowdropdown] = useState(false)
    const { data: session } = useSession();

    return (
        <nav className='bg-[#00092d] text-white flex justify-between items-center px-4 h-14'>
            <div className="logo font-bold"><Link href="/"> GetMeAChai</Link> </div>
            {/* <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign up</li>
                <li>login</li>
            </ul> */}
            <div className='relative inline-block py-2' onMouseEnter={() => setShowdropdown(true)} onMouseLeave={() => setShowdropdown(false)}>
                {session && <>
                    <button id="dropdownHoverButton" className="text-white mb2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Welcome
                        <span>
                            <img width={28} className='ml-2' src="/Profile.svg" alt="Profile Photo" />
                        </span>
                        {/* {session.user.email} */}
                        <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                    </button>

                    <div id="dropdownHover" className={`z-10  ${showdropdown ? "" : "hidden"} absolute  top-full bg-white divide-y divide-gray-100 rounded-lg shadow w-33 dark:bg-[#1e2939]`}>
                        <ul className="p-2 w-full text-sm text-gray-700 rounded-lg" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="inline-flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-gray-500 font-semibold flex-1 items-center w-full">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="#" className="inline-flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-gray-500 font-semibold flex-1 items-center w-full">Your Page</Link>
                            </li>
                            <li>
                                <Link href="#" className="inline-flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-gray-500 font-semibold flex-1 items-center w-full">Settings</Link>
                            </li>
                            <li>
                                <Link onClick={() => signOut()} href="#" className="inline-flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-gray-500 font-semibold flex-1 items-center w-full">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </>
                }

                {session && <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 mx-4 py-2.5 text-center leading-5 " onClick={() => signOut()}>Logout</button>}
                {!session && <Link href={"/login"}>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 mx-4 py-2.5 text-center leading-5 ">Login</button></Link>}
            </div >
        </nav >
    )
}

export default Navbar