import React from 'react'
import Image from 'next/image'

type Props = {}

const Experiences = (props: Props) => {
    return (
        <section className="relative bg-white pt-[376px] md:pt-[320px] text-ebony-clay">
            <div className='hidden md:block absolute top-[125px] left-[-515px] transform  scale-y-[-1]'>
                <Image src='/images/patterns/pattern-curve-top-left.svg' alt='Curve Top Left Pattern' width={895} height={320}/>
            </div>
            {/* Image */}
            <div className='absolute top-[-85px] left-[50%] translate-x-[-50%] w-[327px] md:w-[573px] h-[400px] md:h-[360px] bg-places-bg-img-sm md:bg-places-bg-img-md bg-no-repeat bg-cover card-shadow'></div>
            <div className="flex flex-col items-center mb-[549px] md:mb-[534px]">
                <div className='pb-[36px] md:pb-[39px]'>
                    <Image src='/images/patterns/pattern-divide.svg' alt='Divide Pattern' width={71} height={7} />
                </div>
                <h1 className='heading-1 font-bold max-w-[255px] md:max-w-[380px] pb-[13px] md:pb-[27px]'>Enjoyable place for all the family</h1>
                <p className='p-1 max-w-[327px] md:max-w-[457px]'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
            </div>

           
            <div className="relative flex flex-col items-center pb-[118px] ">
                 <div className='absolute top-[-465px] md:top-[-415px] left-[50%] translate-x-[-50%] w-[327px] md:w-[573px] h-[400px] md:h-[360px] bg-sourced-bg-img-sm md:bg-sourced-bg-img-md bg-no-repeat bg-cover card-shadow'></div>
                <div className='pb-[36px] md:pb-[39px]'>
                    <Image src='/images/patterns/pattern-divide.svg' alt='Divide Pattern' width={71} height={7} />
                </div>
                <h1 className='heading-1 font-bold max-w-[255px] md:max-w-[380px] pb-[13px] md:pb-[27px]'>The most locally sourced food</h1>
                <p className='p-1 max-w-[327px] md:max-w-[457px]'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
            </div>

            {/* <div className='border hidden md:block absolute bottom-0 right-[-600px] transform scale-x-[-1] scale-y-[-1]'>
                <Image src='/images/patterns/pattern-curve-bottom-right.svg' alt='Curve Bottom Pattern' width={993} height={320}/>
            </div> */}
        </section>
    )
}

export default Experiences