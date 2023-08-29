import React from 'react'
import Image from 'next/image'
import Divider from './Divider'
import HighlightItem from './HighlightItem'

const HighLightsSection = () => {
  return (
    <div className='bg-cod-grey text-white px-6 xl:px-[165px] pt-[72px] md:pt-[96px] xl:pt-[200px] pb-[102px] md:pb-[96px] xl:pb-[120px] flex flex-col xl:flex-row items-center xl:items-start gap-[85px] md:gap-[54px] xl:gap-[125px]'>
        <div className='flex flex-col items-center xl:items-start'>
            <Divider />
            <h1 className='text-center xl:text-start text-[2rem] md:text-5xl leading-10 md:leading-[3rem] tracking-[-0.4px] md:tracking-[-0.5px] font-bold max-w-[327px] md:max-w-[445px] mb-[13px] md:mb-[27px]'>A few highlights from our menu</h1>
            <p className='text-center xl:text-start text-base md:text-xl font-normal leading-[1.625rem] md:leading-[1.875rem] max-w-[327px] md:max-w-[445px]'>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>
        <div className='flex flex-col items-center xl:pt-12'>
                <HighlightItem 
                image='bg-salmon-sm md:bg-salmon-md' 
                title='Seared Salmon Fillet' 
                description='Our locally sourced salmon served with a refreshing buckwheat summer salad.'/>

                <div className='w-full h-[1px] border-t border-white border-opacity-[0.1494] mt-7 mb-6 md:mx-6'></div>

                <HighlightItem 
                image='bg-beef-sm md:bg-beef-md' 
                title='Rosemary Filet Mignon' 
                description='Our prime beef served to your taste with a delicious choice of seasonal sides.'/>

                 <div className='w-full h-[1px] border-t border-white border-opacity-[0.1494] mt-7 mb-6 md:mx-6'></div>
                
                <HighlightItem 
                image='bg-chocolate-sm md:bg-chocolate-md' 
                title='Summer Fruit Chocolate Mousse' 
                description='Creamy mousse combined with summer fruits and dark chocolate shavings.'/>
        </div>
    </div>
  )
}

export default HighLightsSection