import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-100 font-Poppins px-2 py-4 flex justify-center w-full'>
        <div className='flex flex-col sm:flex-row max-w-4xl  sm:py-8 w-full justify-between  sm:items-center '>
            <div className='text-blue-900'>
                <p className='font-light text-blue-900 leading-[4]'><span className='text-xl font-bold sm:font-bold text-blue-900'>chat</span>app</p>
                <p className='text-xs '>The last team chat you <br/> will ever need</p>
                <p className='text-[0.6rem] leading-[10] sm:leading-[14] '>&copy;Copyright ChatApp Inc.</p>
            </div>

            <div className='text-blue-900'>
                <p className='font-medium pb-4'>Help</p>
                <p className='font-light text-xs pb-2'>Support</p>
                <p className='font-light text-xs pb-2'>Knowledge Base</p>
                <p className='font-light text-xs pb-20 '>Tutorials</p>
            </div>

            <div className='text-blue-900'>
                <p className='font-medium  sm:pt-4'>Features</p>
                <p className='font-light text-xs pt-2 pb-2'>Screen Sharing</p>
                <p className='font-light text-xs pb-2'>User Management</p>
                <p className='font-light text-xs pb-2'>File Sharing</p>
                <p className='font-light text-xs pb-20'>IOS & Android Apps</p>
            </div>

            <div className='text-blue-900'>
                <p className='font-medium pb-2'>Company</p>
                <p className='font-light text-xs pb-2'>About Us</p>
                <p className='font-light text-xs pb-2'>Careers</p>
                <p className='font-light text-xs pb-20'>Contact Us</p>
            </div>

            <div className='text-blue-900'>
                <p className='font-medium pt-2'>Contact Us</p>
                <p className='font-light text-xs pt-2 pb-2'>chatapp@info.com</p>
                <p className='font-light text-x pb-2'>+234 904 586 5849</p>
                <p className='font-light text-xs pb-20'>521 Road, Off Transcent Lane, Abuja.</p>
            </div>

        </div>
    </div>
  )
}
