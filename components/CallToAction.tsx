import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-5 md:gap-6 lg:gap-10 pt-[84px] md:pt-[72px] lg:pt-[99px] px-6 lg:px-[165px] pb-20 md:pb-16 lg:pb-[93px] bg-ready-sm md:bg-ready-md lg:bg-ready-lg bg-no-repeat bg-cover'>
       <h1 className='text-center text-white text-[2rem] md:text-5xl font-bold leading-10 md:leading-[3rem] tracking-[-0.4px]  md:tracking-[-0.5px] max-w-[327px] md:max-w-none'>Ready to make a reservation?</h1>
        <Link href='/booking' className='hover:bg-white border border-white text-white bg-transparent hover:text-cod-grey pt-[25px] pr-[55px] pb-[23px] pl-[54px] text-[1.063rem] font-semibold leading-4 tracking-[2.5px] uppercase lg:flex-none transition duration-200'>Book A Table</Link>
    </div>
  )
}

export default CallToAction