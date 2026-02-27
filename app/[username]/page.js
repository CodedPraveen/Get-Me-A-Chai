import React from 'react'

export default async function Username({ params }) {
    const { username } = await params;

    return (
        <>
            {username}
            <div className='cover' >
                <img className='object-cover w-full h-[350] relative'
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/20.gif?token-hash=81uhFp0MW20Qivf1LInhJegiH8RHtwe14ZvuDKLj4RU%3D&token-time=1772582400" alt="" />
                <div className="profile">
                    <img width={100} className='' src="/profile.svg" alt="profile pic" />
                </div>
            </div>
        </>
    );
}