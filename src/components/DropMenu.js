import React from 'react'

export default function DropMenu() {
    

  return (
    <div className='sm:hidden font-Poppins'>
            <div className='w-full font-bold text-lg bg-gradient-to-l from-sky-500 ... text-gray-200 absolute top-[50px] left-0 flex justify-end pr-5 '>
          <ul>
          <li className='py-4'>Product</li>
            <li className='py-4'>Services</li>
            <li className='py-4'>Contact</li>
            <li className='py-4 pl-2'>Login</li>
          </ul>
        </div>
        
    </div>
  )
}
//absolute left-[-100%]