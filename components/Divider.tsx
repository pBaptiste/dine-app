import React from 'react'
import Image from 'next/image'

const Divider = () => {
  return (
     <div className='pb-[36px] md:pb-[39px]'>
        <Image src='/images/patterns/pattern-divide.svg' alt='Divide Pattern' width={71} height={7} />
    </div>
  )
}

export default Divider