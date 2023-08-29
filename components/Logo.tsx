import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link  className='cursor-pointer' href='/'>
        <div className='relative w-[82.4px] h-[32px] md:w-[103px] md:h-[40px]'>
            <Image 
            src='/images/logo.svg' 
            fill
            alt='Dine Logo'
            priority={true}  />
        </div>
        
    </Link>
  )
}

export default Logo