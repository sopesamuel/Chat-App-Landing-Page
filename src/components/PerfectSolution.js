import React from 'react'
import perfect from '../assets/pexels-rfstudio-3810756 1.png'
import group2 from '../assets/Group 2.png'
import star from '../assets/star 1.png'

export default function PerfectSolution() {
  return (
    <div className='bg-cyan-100 pt-40 pb-40'>
        <div className='flex flex-col sm:flex-row items-center'>
            <div className='flex flex-col '>
                <img  className='absolute w-[10%]  ' src={group2} alt='' />
                <img className='relative w-7/12 pt-3 sm:w-8/12  ml-6 z-10 sm:pt-3' src={perfect} alt='' />
                <img  className='absolute w-[10%] sm:w-[10%] sm:h-1/12 sm:mx-96 sm:mt-56' src={group2} alt='' />
            </div>
            <div className='pt-8'>
                <h2 className='text-4xl font-light'>Perfect Solution for <br/> Small Businesses</h2>
                <p className='text-sm font-thin leading-10'>Pricing plan that fit like a glove</p>
                <button className='rounded-full bg-indigo-600 px-2 py-1 text-sm sm:px-3 sm:py-3 text-white sm:font-light'>Get a Demo</button>

                <div className='flex flex-col sm:flex-row pt-5'>
                    <div className='flex'>
                        <img src={star} alt='' className='w-5 h-5 m-1'/>
                        <img src={star} alt='' className='w-5 h-5 m-1'/>
                        <img src={star} alt='' className='w-5 h-5 m-1'/>
                        <img src={star} alt='' className='w-5 h-5 m-1'/>
                        <img src={star} alt='' className='w-5 h-5 m-1'/>
                    </div>
                    <div >
                      <p className='font-light pt-3 sm:ml-3'><span className='font-medium'>5,300 businesses</span> use ChatApp<br/> and they rate it as <span className='font-medium'>5-stars</span></p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
