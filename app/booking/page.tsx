import React from 'react'
import ReservationSection from '@/components/ReservationSection'
import Form from '@/components/Form'
import Image from 'next/image'

const Booking = () => {
  return (
    <div>
        <ReservationSection />
        <section className='relative bg-white flex xl:bg-pattern-curve-bottom-right bg-no-repeat h-[534px] md:h-[540px] xl:h-[320px] overflow-visible'>
            <Form />
            <div className='hidden xl:block absolute top-[150px] right-[575px]'>
                <Image src='/images/patterns/pattern-lines.svg' alt='Line Patterns' width={160} height={76} />
            </div>
            
        </section>
    </div>
  )
}

export default Booking