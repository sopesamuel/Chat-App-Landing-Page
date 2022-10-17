import React from 'react'


export default function Navbar({handleChange}) {
  

  return (
    <header className='bg-indigo-600 flex justify-center px-4 py-6'>
        <div className='max-w-4xl w-full flex items-center justify-between'>
           <p className='text-white font-bold text-lg font-Poppins'>chat<span className='text-lg font-thin'>app</span></p>
          <div className='hidden md:flex flex-row items-center text-white'>
          <ul className='font-Poppins flex  font-extralight'>
            <li className='px-4'>Product</li>
            <li className='px-4'>Services</li>
            <li className='px-4'>Contact</li>
            <li className='px-4'>Login</li>
           </ul>
           <button className='font-Poppins py-2 bg-indigo-500 rounded-full px-4 font-extralight'>Try it Free</button>
           </div>
           <button type="button" 
            class="block text-white sm:hidden" onClick={handleChange}>
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
        </button>
        </div>
    </header>
  )
}
