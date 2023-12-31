import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default class Navbar extends React.Component {
    render() {
        return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
          <div className='flex justify-between items-center w-full h-full px-2 2xl:px16'>
            <Image 
             src="../public/assets/navLogo.png" 
             alt="logo" 
             width={100} 
             height={100} 
             />
          <div> 
            <ul className='hidden md:flex'>
            <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>          
            </Link>
            <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>          
            </Link> 
            <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>          
            </Link> 
            <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>          
            </Link> 
            <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>          
            </Link>
            </ul>      
          </div> 
          </div>
        </div>
        )
    }
    }