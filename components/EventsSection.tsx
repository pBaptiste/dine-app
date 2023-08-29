"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EventsSection = () => {
    const events = [
        {
            title: "Family Gathering",
            desc: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
            bgImage: "bg-family-sm md:bg-family-md xl:bg-family-lg"
        },
        {
            title: "Special Events",
            desc: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
            bgImage: "bg-special-sm md:bg-special-md xl:bg-special-lg"
        },
        {
            title: "Social Events",
            desc: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
            bgImage: "bg-social-sm md:bg-social-md xl:bg-social-lg"
        },
    ]

    const [activeEvent, setActiveEvent] = useState(events[0] || {})

    const handleClick = (event: any) => {
        const title = event.target.innerText
       
        const eventObj = events.filter(event => event.title.toLowerCase() === title.toLowerCase())[0]
         if (eventObj) {
            setActiveEvent(eventObj);
        }
        
    }
    
  return (
    <div className='flex flex-col xl:flex-row items-center gap-[49px] xl:gap-[125px] md:gap-[57px] pt-20 pb-[124px] md:py-[120px] px-6 xl:px-[165px] md:bg-pattern-curve-top-right bg-events-position-md xl:bg-events-position-lg bg-no-repeat'>
        <div className={`relative w-[326px] md:w-[573px] xl:w-[540px] h-[400px] md:h-[360px] xl:h-[600px] ${activeEvent.bgImage} bg-cover bg-no-repeat menu-shadow flex-none image-container `}>
             <div className='hidden md:block absolute top-[-40px] left-[-58px]'>
                        <Image src='/images/patterns/pattern-lines.svg' alt='Line Patterns' width={160} height={76} />
                    </div>
        </div>
        <div className='flex flex-col gap-[27px] md:gap-[55px] xl:gap-[79px]'>
            <div className='flex flex-col md:flex-row xl:flex-col items-center xl:items-start gap-4 md:gap-[54px] xl:gap-[12px] xl:order-2'>
               {events.map((event) => (
                <button
                    key={event.title}
                    onClick={handleClick}
                    className={`text-[#4C4C4C] hover:text-opacity-100 ${
                        activeEvent.title.toLowerCase() === event.title.toLowerCase() ? 'text-opacity-100' : 'text-opacity-50'
                    } text-[1.063rem] font-semibold leading-7 tracking-[2.5px] uppercase flex flex-col items-center relative`}
                >
                    {event.title}
                    {activeEvent.title.toLowerCase() === event.title.toLowerCase() && <div className='w-[48px] xl:w-[95px] h-[1px] bg-beaver xl:absolute top-[50%] left-[-125px]'></div>}
                </button>
            ))}
            </div>
            <div className='flex flex-col items-center xl:items-start'>
                <h2 className='text-ebony-clay text-center xl:text-start text-[2rem] md:text-5xl font-bold leading-10 md:leading-[3rem] tracking-[-0.4px] md:tracking-[-0.5px] mb-[13px] md:mb-[19px]'>{activeEvent.title}</h2>
                <p className='text-ebony-clay text-center xl:text-start font-normal text-base md:text-xl leading-[1.625rem] md:leading-[1.875rem] max-w-[327px] md:max-w-[457px] mb-[27px] md:mb-[60px]'>{activeEvent.desc}</p>
                 <Link href='/booking' className='hover:bg-white hover:border hover:border-cod-grey text-white bg-cod-grey hover:text-cod-grey pt-[25px] pr-[55px] pb-[23px] pl-[54px] text-[1.063rem] font-semibold leading-4 tracking-[2.5px] uppercase xl:flex-none transition duration-200'>Book A Table</Link>
            </div>
        </div>
    </div>
  )
}

export default EventsSection