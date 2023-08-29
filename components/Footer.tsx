import React from 'react'
import Logo from './Logo'

type Props = {
    text: string;
}

const FooterInfo = ({text} : Props) => {
    return (
        <p className='text-center md:text-start text-[0.875rem] text-normal leading-7 tracking-[2px] uppercase'>
            {text}
        </p>
    )
}

const Footer = () => {
  return (
    <div className='bg-cod-grey text-white pt-20 md:pt-16 lg:pt-20 md:px-10 lg:pl-[165px] lg:pr-3 pb-[78px] lg:pb-[76px] md:pb-[62px] flex flex-col md:flex-row items-center md:items-start gap-[42px] md:gap-[129.56px] lg:gap-[192.58px]'>
        <Logo />
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[180px]'>
            <div>
                <FooterInfo text='Marthwaite, Sedbergh'/>
                <FooterInfo text='Cumbria'/>
                <FooterInfo text='+ 00 44 123 4567'/>
            </div>
            <div>
                <FooterInfo text='Open Times'/>
                <FooterInfo text='Mon - Fri: 09:00 AM - 10:00 PM'/>
                <FooterInfo text='Sat - Sun: 09:00 AM - 11:30 PM'/>
            </div>
        </div>
    </div>
  )
}

export default Footer