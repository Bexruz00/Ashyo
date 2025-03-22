"use client"
import { Link } from '@/i18n/navigation'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import React from 'react'
import Image from 'next/image'

const HeaderCategory = () => {
  const {data:categotyList, isLoading} = getCategory()
  
  return (
    <div className='containers !mt-[20px] hidden header-category sm:flex items-center justify-between flex-wrap gap-3'>
      {isLoading ? <Image className='w-[55px] h-[55px] mx-auto' src={"/loading.png"} alt='Logo' width={55} height={55} priority/> : categotyList.map((item:CategoryType) => <Link className='text-[16px] hover:text-[#134E9B] duration-200 font-normal text-[#545D6A]' href={"/"} key={item.id}>{item.name}</Link>)}
    </div>
  )
}

export default HeaderCategory