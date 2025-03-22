"use client"
import { Context } from '@/context/context'
import { IMG_API } from '@/hooks/getEnv'
import { ClearIcon } from '@/icons'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const HeaderPopamCategory = () => {
  const {openCategory, setOpenCategory} = useContext(Context)
  const {data:categoryList, isLoading} = getCategory()
  const [childCategory, setChildCategory] = useState<CategoryType>()
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  function handleShowCategoryChild(obj:CategoryType){
    setChildCategory(obj)
    setActiveCategory(obj.id)
  }
  return (
    <div className={`flex ${openCategory ? "overflow-hidden border-none h-[100vh] lg:h-[570px] shadow-slate-300" : "h-0 overflow-hidden"} duration-300 z-20 left-0 fixed lg:absolute w-full top-0 lg:top-[96px] shadow-lg  `}>
      <ul className='w-[60%] md:w-[30%] space-y-[14px] py-[15px] sm:py-[43px] px-[15px] sm:px-[32px] h-[100%] bg-[#EBEFF3]'>
          {categoryList.map((item:CategoryType) => <li id={String(item.id)} onMouseEnter={() => handleShowCategoryChild(item)} key={item.id} className={`${activeCategory == item.id && "bg-[#fefefed6]"} duration-100 rounded-[5px] text-[#454545] cursor-pointer flex py-[8px] sm:py-[12px] pl-[10px] sm:pl-[32px] items-center gap-[16px]`}>
            <Image className='w-[22px] h-[20px]' src={`${IMG_API}/${item.icon}`} alt='Category Icon' width={22} height={20} priority/>
            <span className='text-[16px] leading-[100%]'>{item.name}</span>            
          </li>)}
      </ul>  
      <ul className='w-[40%] md:w-[70%] h-[100%] bg-white pt-[20px] sm:pt-[55px] pl-[15px] sm:pl-[73px]'>
        <strong className='font-semibold text-[16px] text-[#000000B2] leading-[100%] mb-[25px] inline-block'>{childCategory?.name}</strong>
        {childCategory?.subCategories.map((item:CategoryType) => <li className='text-[14px] text-[#545D6A]' key={String(item.id)}>{item.name}</li>)}
      </ul>
      <button onClick={() => setOpenCategory(false)} className='absolute top-2 right-2 md:hidden'> <ClearIcon/> </button>
    </div>
  )
}

export default HeaderPopamCategory