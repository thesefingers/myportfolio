import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-black h-[300px] w-screen flex flex-col justify-center items-center text-center'>
        <h1 className='font-semibold   text-gray-300 hover:text-white tracking-widest'>
            Contact
        </h1>
        <br />
        <div className='flex flex-row gap-20 mb-10'>

            <IoLogoGithub className='w-[50px] h-[50px] text-gray-400 hover:scale-150 transition-all ease-in-out hover:text-white cursor-pointer'/>
            <IoLogoLinkedin className='w-[50px] h-[50px] text-gray-400 hover:scale-150 transition-all ease-in-out hover:text-white cursor-pointer'/>
            <IoMailSharp className='w-[50px] h-[50px] text-gray-400 hover:scale-150 transition-all ease-in-out hover:text-white cursor-pointer'/>
        </div>
        <div>
            <h2 className='mt-5 text-[30px]'>
                &copy;TheseFingers
            </h2>
        </div>
    </div>
  )
}

export default Footer