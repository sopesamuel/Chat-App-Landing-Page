import React from 'react'
// import lady1 from '../assets/pexels-andrea-piacquadio-774909 1.png'
// import lady2 from '../assets/pexels-luizclas-1848565 1.png'
import group from '../assets/Group 1.png'

export default function TopSection() {
  return (
    <div className='bg-indigo-600 text-white font-Poppins px-4 py-4 flex justify-center'>
        <div className='flex max-w-4xl py-8 w-full justify-between items-end sm:items-center'>
            <div className='w-full'>
                <p className='text-4xl sm:text-6xl font-semibold leading-tight'>Have your <br/> best chat</p>
                <p className='my-4'>Fast, easy & unlimited team chat</p>
                <button className='rounded-full font-light  bg-white text-indigo-700 px-4 py-2'>Try it Free</button> <button className='rounded-full mt-2 sm:mx-2 font-light border-2 border-white text-white px-3 py-2 sm:px-4 sm:py-1'>Get a Demo</button>
            
            </div>
            <div>
                <img src={group} alt='' className='w-80 sm:w-full'/>
            </div>
            </div>
    </div>
  )
}
