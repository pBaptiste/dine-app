"use client"
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Image from 'next/image'
import bookingSm from '../public/images/booking/hero-bg-mobile.jpg'
import bookingMd from '../public/images/booking/hero-bg-tablet.jpg'
import bookingLg from '../public/images/booking/hero-bg-desktop.jpg'

const ReservationSection = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [src, setSrc] = useState(bookingSm)

  //Listens for window resize and updates the window width state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

  }, [windowWidth])

  //dynamically selects an image src based on the window width
  useEffect(() => {
    let currentSrc = src
    if (windowWidth < 768) {
      currentSrc = bookingSm
    }
    else if (windowWidth < 1280) {
      currentSrc = bookingMd
    }
    else if (windowWidth > 1280) {
      currentSrc = bookingLg
    }

    setSrc(currentSrc)
  }, [windowWidth, src])

  return (
    <div className='relative text-white flex flex-col items-center md:items-start pt-14 xl:pt-[65px] px-6 xl:px-[165px] pb-[228px] md:pb-[268px] xl:pb-[153px] xl:max-h-[600px]'>
      <div className='xl:block absolute top-[0px] left-[0px] w-full h-full overflow-hidden'>
        <Image
          className="object-cover"
          alt="Reservation"
          src={src}
          fill
          priority={true}
        />
      </div>

      <Logo />
      <div className='flex flex-col md:items-center xl:items-start pt-[44px] md:pt-[70px] xl:pt-[153px] text-center xl:text-start md:w-full xl:w-fit z-30'>
        <h1 className="text-[2rem] md:text-5xl xl:text-[5rem] font-light leading-10 md:leading-[4rem] xl:leading-[5rem] tracking-[-0.4px] md:tracking-[-0.6px] xl:tracking-[-1px] pb-[13px] xl:pb-[18px]" >Reservations</h1>
        <p className="text-base md:text-xl font-normal leading-[1.625rem] md:leading-[1.875rem] pb-[19px] max-w-[327px] md:max-w-[573px] xl:max-w-[445px]">We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
        <button className="md:hidden pt-[25px] pr-[48px] pb-6 pl-[47px] border border-white bg-transparent hover:bg-white hover:text-cod-grey text-[1.063rem] font-semibold leading-4 tracking-[2.5px] uppercase transition duration-[400ms]">Reserve Place</button>
      </div>

    </div>
  )
}

export default ReservationSection