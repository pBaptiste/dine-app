"use client"
import React, { useState} from 'react'
import Image from 'next/image'

const Form = () => {
    const required = 'this field is required'
    const incomplete = 'This field is incomplete'
    const [openMeridianMenu, setOpenMeridianMenu] = useState(false)
    const [currentMeridian, setCurrentMeridian] = useState('AM')
    const [numberOfPeople, setNumberOfPeople] = useState(1)
    const [isEmpty, setIsEmpty] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState({
        month: '',
        day: '',
        year: '',
})
    const [time, setTime] = useState({
        hour: '',
        minute: '',
        meridian: 'AM',
    })

    const decreaseCount = () => {
        if(numberOfPeople > 1) {
            setNumberOfPeople((prev) => prev - 1)
    }
}

    const increaseCount = () => {
        setNumberOfPeople((prev) => prev + 1)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //console.log('Submitted')
        if(name.trim() === '' || email.trim() === '' || date.month.trim() === '' || date.day.trim() === '' || date.year.trim() === '' || time.hour.trim() === '' || time.minute.trim() === '') {
            setIsEmpty(true)
           
        }else {
            //form submittion
        }
    }
    

  return (
    <form onSubmit={handleSubmit}
    className='absolute z-30 top-[-130px] md:top-[-220px] xl:top-[-350px] left-[50%] translate-x-[-50%] xl:left-auto xl:translate-x-0 xl:right-[120px] bg-white text-cod-grey pt-[34px] md:pt-[50px] px-8 md:px-12 pb-8 md:pb-12 w-[327px] md:w-[540px] form-shadow'> 
        {/* NAME */}
        <div className='mb-[34px]'>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" 
        placeholder='Name' 
        className={`${isEmpty && !name.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } text-xl font-normal leading-7 border-b bg-transparent w-full pb-[15px] px-4 outline-none caret-beaver`}/>
        {isEmpty && !name.trim() && <p className='text-dark-red text-[0.625rem] font-medium tracking-[-0.125px] mt-3 ml-4'> {required} </p>}
        </div>

        {/* EMAIL */}
        <div className='mb-[34px]'>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder='Email' 
        className={`${isEmpty && !email.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } text-xl font-normal leading-7 border-b bg-transparent w-full pb-[15px] px-4 outline-none caret-beaver`}/>
         {isEmpty && !email.trim() && <p className='text-dark-red text-[0.625rem] font-medium tracking-[-0.125px] mt-3 ml-4'> {required} </p>}
        </div>

        {/* DATE PICKER */}
        <div className='flex flex-col md:flex-row gap-2 md:gap-[65px] md:justify-between'>
            <div className='md:pt-[9px] flex-none'>
            <p className={`${isEmpty && (!date.month.trim() || !date.day.trim() || !date.year.trim()) && 'text-dark-red'} text-xl font-normal leading-7 md:flex-none`}>Pick a date</p>
             {isEmpty && (!date.month.trim() || !date.day.trim() || !date.year.trim()) && <p className='text-dark-red text-[0.625rem] font-medium tracking-[-0.125px]'> {incomplete} </p>}
            </div>
            <div className='flex mb-[34px] gap-[14px]'>
                <input 
                value={date.month}
                onChange={(e) => setDate({...date, month: e.target.value})}
                type="text"
                placeholder='MM' 
                pattern="[0-9]+"
                maxLength={2}
                className={`${isEmpty && !date.month.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } w-1/3 text-xl font-normal leading-7 border-b bg-transparent pb-[15px] pl-[14.6px] pr-[28.4px] outline-none caret-beaver`}/>
                <input 
                value={date.day}
                onChange={(e) => setDate({...date, day: e.target.value})}
                type="text"
                placeholder='DD' 
                pattern="[0-9]+"
                maxLength={2}
                className={`${isEmpty && !date.day.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } w-1/3 text-xl font-normal leading-7 border-b bg-transparent pb-[15px] pl-[14.6px] pr-[28.4px] outline-none caret-beaver`}/>
                <input 
                value={date.year}
                onChange={(e) => setDate({...date, year: e.target.value})}
                type="text"
                placeholder='YYYY' 
                pattern="[0-9]+"
                maxLength={4}
                className={`${isEmpty && !date.year.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } w-1/3 text-xl font-normal leading-7 border-b bg-transparent pb-[15px] pl-[14.6px] pr-[28.4px] outline-none caret-beaver`}/>
            </div>
        </div>
        {/* TIME PICKER */}
        <div className='flex flex-col md:flex-row gap-2 md:gap-[65px] md:justify-between'>
           <div className='md:pt-[9px] flex-none'>
            <p className={`${isEmpty && (!time.hour.trim() || !time.minute.trim()) && 'text-dark-red'} text-xl font-normal leading-7 md:flex-none`}>Pick a time</p>
             {isEmpty && (!time.hour.trim() || !time.minute.trim()) && <p className='text-dark-red text-[0.625rem] font-medium tracking-[-0.125px]'> {incomplete} </p>}
            </div>
            <div className='flex mb-[36px] gap-[14px]'>
                <input 
                value={time.hour}
                onChange={(e) => setTime({...time, hour: e.target.value})}
                type="text"
                placeholder='09' 
                pattern="[0-9]+"
                maxLength={2}
                className={`${isEmpty && !time.hour.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } w-1/3 text-xl font-normal leading-7 border-b bg-transparent pb-[15px] pl-[14.6px] pr-[28.4px] outline-none caret-beaver`}/>
                <input 
                value={time.minute}
                onChange={(e) => setTime({...time, minute: e.target.value})}
                type="text"
                placeholder='00' 
                pattern="[0-9]+"
                maxLength={2}
                className={`${isEmpty && !time.minute.trim() ? 'placeholder:text-dark-red placeholder:text-opacity-50 border-dark-red' : 'border-[#8E8E8E]' } w-1/3 text-xl font-normal leading-7 border-b bg-transparent pb-[15px] pl-[14.6px] pr-[28.4px] outline-none caret-beaver`}/>

                <button type='button' onClick={() => setOpenMeridianMenu((prev) => !prev)}
                className='relative flex items-center gap-[6px] w-1/3 text-xl font-normal leading-7 border-b border-[#8E8E8E] bg-transparent pb-[15px] px-4 outline-none'>
                    {currentMeridian} <Image src="/images/icons/icon-arrow.svg" width={16} height={8} alt="arrow-down" className={`${openMeridianMenu && 'rotate-180'}`}/>
                    {openMeridianMenu && 
                    <ul className='absolute w-[106px] h-[103px] top-[50px] right-0 bg-white flex flex-col gap-[15.57px] py-[18px] pl-4 pr-[30px] menu-shadow'>
                        <li onClick={() => setCurrentMeridian('AM')} className='text-xl font-normal leading-7 flex items-center gap-[15.57px]'>
                           <Image className={`${currentMeridian === 'AM' ? 'opacity-100' : 'opacity-0'}`} src='/images/icons/icon-check.svg' alt='check-icon' width={10.432} height={7.664}/> AM
                        </li>
                        <li onClick={() => setCurrentMeridian('PM')} className='text-xl font-normal leading-7 flex items-center gap-[15.57px]'>
                           <Image className={`${currentMeridian === 'PM' ? 'opacity-100' : 'opacity-0'}`} src='/images/icons/icon-check.svg' alt='check-icon' width={10.432} height={7.664}/> PM
                        </li>
                    </ul>}
                </button>
            </div>
        </div>
        <div  className='flex justify-between items-center w-full border-b border-[#8E8E8E] bg-transparent pb-[17px] pl-[19px] pr-[17px] mb-8'>
                        <button onClick={decreaseCount} type='button' >
                            <Image src="/images/icons/icon-minus.svg" width={7} height={3} alt="minus-icon" />
                        </button>
                        <p className='text-[#151515] text-xl font-bold leading-6'>
                           {numberOfPeople === 1 ? '1 person' : `${numberOfPeople} people`}
                        </p>
                        <button onClick={increaseCount} type='button' >
                             <Image src="/images/icons/icon-plus.svg" width={7} height={3} alt="plus-icon" />
                        </button>
        </div>
        <button type='submit' className='w-full bg-cod-grey hover:bg-white text-white hover:text-cod-grey hover:border hover:border-cod-grey transition duration-200 pt-[19px] pb-[17px] text-[1.063rem] font-semibold leading-7 tracking-[2.5px] uppercase'>
            Make Reservation
        </button>
    </form>
  )
}

export default Form