import React from 'react'

export default async function Username({ params }) {
    const { username } = await params;

    return (
        <>
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
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />

                            <div className="flex ">
                                <input type="number" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 ml-2 py-2.5 text-center leading-5 ">Pay</button>
                            </div>

                        </div>
                        {/* Or chose from these Amount */}
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10 </button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay $20 </button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay $30 </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}