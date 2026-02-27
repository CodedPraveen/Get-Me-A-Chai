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
        <div className='text-white'>
            Dashboard123
        </div>
    )
}

export default Dashboard
