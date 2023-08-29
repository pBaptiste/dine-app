import React from 'react'

type Props = {
    image: string;
    title: string;
    description: string;
}

const HighlightItem = ({image, title, description}: Props) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-center gap-[36px] md:gap-[62px]'>
        <div className={`relative ${image} bg-no-repeat bg-cover w-[327px] md:w-[128px] h-[245px] md:h-[96px] flex-none`}>
            <div className='hidden md:block absolute top-[15px] right-[-32px] w-8 h-[1px] bg-beaver'></div>
        </div>
        <div className=''>
            <h2 className='text-center md:text-start  text-xl font-bold leading-6 tracking-[-0.25px] pb-[6px]'>{title}</h2>
            <p className='text-center md:text-start text-base font-normal leading-[1.625rem] max-w-[270px] md:max-w-[342px]'>{description}</p>
        </div>
    </div>
  )
}

export default HighlightItem