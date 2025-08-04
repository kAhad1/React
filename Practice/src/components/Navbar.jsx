import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex p-5 bg-amber-400 items-center justify-between '>
        <h2 className='text-2xl'>Navbar</h2>
        <div className='flex gap-8 items-center'>
            <h4 className='text-xl'>About</h4>
            <h4 className='text-xl'>Contact</h4>
            <h4 className='text-xl'>Services</h4>
            <h4 className='text-xl'>Your Account</h4>
        </div>
    </div>
    </>
  )
}

export default Navbar