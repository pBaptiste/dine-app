import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='relative flex flex-col xl:flex-row xl:h-[820px]'>
            <div className='w-full h-[220px] md:h-[374px] xl:h-full bg-hero-bg-img-sm md:bg-hero-bg-img-md xl:bg-hero-bg-img-lg bg-hero-position-sm xl:bg-hero-position-lg bg-no-repeat bg-cover xl:order-2'></div>
            <div className='xl:order-1 xl:w-[544px] xl:flex-none pt-[12px] md:pt-[1px] xl:pt-[65px] xl:pl-[165px] pb-[152px] md:pb-[216px] xl:pb-[195px] flex flex-col items-center xl:items-start bg-black'>
                <Logo />
                <div className='xl:absolute pt-9 md:pt-[38px] lg:pt-[153px] text-white flex flex-col items-center xl:items-start'>
                    <h1 className='text-center xl:text-start text-[2rem] md:text-5xl leading-10 tracking-[-0.4px] md:tracking-[-0.6px] md:leading-[4rem] xl:text-[5rem] xl:leading-[5rem] xl:tracking-[-1px] font-light max-w-[200px] md:max-w-[359px] xl:max-w-[508px] pb-[21px] xl:pb-[10px]'>Exquisite dining since 1989</h1>
                    <p className='p-1 max-w-[327px] md:max-w-[573px] xl:max-w-[445px] pb-[53px] xl:pb-10'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    <Link href='/booking' className='border border-white bg-transparent hover:bg-white hover:text-cod-grey pt-[25px] pr-[55px] pb-[23px] pl-[54px] text-[1.063rem] font-semibold leading-4 tracking-[2.5px] uppercase transition duration-[400ms]'>Book A Table</Link>
                </div>
            </div>

        </div>
    )
}

export default Banner