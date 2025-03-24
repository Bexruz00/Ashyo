"use client"
import Image from 'next/image'
import React from 'react'
import './style.css';

const Poster = () => {
  return (
    <div className='containers'>
      <div className='poster__box flex justify-between items-center mt-[100px] mb-[100px] py-[95px] pr-[90px] rounded-[10px] bg-[#282828]'>
        <div className='poster__boxImg absolute left-[200px]'>
          <Image className='poster__img w-[600px]' src={"/pods.png"} alt='Pods' priority width={518} height={490}/>
        </div>
        <div className=' w-[440px] h-[50px]'></div>
        <div className='poster__textBox flex flex-col gap-[22px] max-w-[440px]'>
          <h3 className='poster__title text-[32px] text-white'>Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!</h3>
          <button className='poster__btn max-w-[161px] h-[54px] text-[16px] bg-white text-[#111] rounded-[6px]'>Batafsil</button>
        </div>
      </div>
    </div>
  )
}

export default Poster