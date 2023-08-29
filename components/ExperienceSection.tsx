import React from 'react'
import Image from 'next/image'
import Divider from './Divider'

const ExperienceSection = () => {
    return (
        <section className="relative bg-white text-ebony-clay xl:px-[165px] md:bg-pattern-curve-top-left bg-experiences-position-md xl:bg-experiences-position-lg bg-no-repeat border border-opacity-0">
             <div className='hidden md:block absolute top-[125px] xl:top-[300px] left-[-515px] xl:left-0'>
                <Image src='/images/patterns/pattern-curve-top-right.svg' alt='Curve Top Left Pattern' width={895} height={320}/>
            </div>

            <div className='flex flex-col xl:flex-row items-center xl:justify-between xl:gap-[70px] mb-[101px] md:mb-[118px] xl:mb-[30px]'>
                <div className='relative flex-none  top-[-48px] md:top-[-56px] w-[327px] md:w-[573px] xl:w-[540px] h-[400px] md:h-[360px] xl:h-[720px] bg-places-bg-img-sm md:bg-places-bg-img-md xl:bg-places-bg-img-lg bg-no-repeat bg-cover menu-shadow'></div>
                <div className='flex flex-col items-center xl:items-start'>
                    <Divider />
                    <h1 className='text-center xl:text-start text-[2rem] md:text-5xl leading-10 md:leading-[3rem] tracking-[-0.4px] md:tracking-[-0.5px] font-bold max-w-[255px] md:max-w-[380px] pb-[13px] md:pb-[27px]'>Enjoyable place for all the family</h1>
                    <p className='text-center xl:text-start text-base md:text-xl font-normal leading-[1.625rem] md:leading-[1.875rem] max-w-[327px] md:max-w-[457px]'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>

            <div className='flex flex-col xl:flex-row items-center xl:justify-between xl:gap-[70px] mb-[101px] md:mb-[118px] xl:mb-0'>
                <div className='relative flex-none xl:bottom-[-100px]  w-[327px] md:w-[573px] xl:w-[540px] h-[400px] md:h-[360px] xl:h-[720px] bg-sourced-bg-img-sm md:bg-sourced-bg-img-md xl:bg-sourced-bg-img-lg bg-no-repeat bg-cover menu-shadow xl:order-2'>
                    <div className='hidden md:block absolute bottom-[56px] xl:bottom-[356px] right-[-56px] xl:right-[-106px]'>
                        <Image src='/images/patterns/pattern-lines.svg' alt='Line Patterns' width={160} height={76} />
                    </div>
                </div>
                <div className='flex flex-col items-center xl:items-start pt-12 md:pt-14 xl:order-1'>
                    <Divider />
                    <h1 className='text-center xl:text-start text-[2rem] md:text-5xl leading-10 md:leading-[3rem] tracking-[-0.4px] md:tracking-[-0.5px] font-bold max-w-[255px] md:max-w-[380px] pb-[13px] md:pb-[27px]'>The most locally sourced food</h1>
                    <p className='text-center xl:text-start text-base md:text-xl font-normal leading-[1.625rem] md:leading-[1.875rem] max-w-[327px] md:max-w-[457px]'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                </div>

            </div>
        </section>
    )
}

export default ExperienceSection