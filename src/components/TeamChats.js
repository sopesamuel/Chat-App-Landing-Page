import React from 'react'
import group2 from '../assets/Group 2.png'
import chats from '../assets/chats 1.png'

export default function TeamChats() {
  return (
    <div className='bg-gray-100 font-Poppins px-4 py-4 flex justify-center w-full'>
        <div className='flex flex-col max-w-4xl py-8 w-full justify-between items-center'>
            <div className='text-center w-[50%]'>
                    <h2 className='font-light text-2xl'>Instant Team Chats</h2>
                    <p className='pt-4 text-gray-500 font-light text-xs leading-5'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
                    </p>
            </div>
           
            <div className='flex mt-8 sm:mt-8 sm:flex sm:ml-40'>
                <img src={group2} alt='' className='absolute  sm:w-1/8 sm:h-[20%]'/>
                <img src={chats} alt='' className='relative w-11/12 mt-2 ml-4 sm:w-9/12 sm:z-10 sm:mt-10 sm:ml-10'/>
            </div>
        </div>
    </div>
  )
}
