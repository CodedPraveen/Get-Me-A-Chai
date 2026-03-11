import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className="bg-gradient-to-r to-[#00092d] w-full text-white  flex justify-center items-center px-4 h-12 bottom-0">
                <p className='text-center '>Copyright &copy; {new Date().getFullYear()} Get me A Chai - All Right Reserved!</p>
            </div>
        </footer>
    )
}

export default Footer
