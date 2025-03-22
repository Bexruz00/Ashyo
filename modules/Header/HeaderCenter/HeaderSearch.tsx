"use client"
import { ArrowDownIcon, SearchIcon } from '@/icons'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { Context } from '@/context/context'
import { useTranslations } from 'next-intl'
import React, { FC, useContext, useEffect, useState } from 'react'
import { instance } from '@/hooks/instange'
import debounce from '@/hooks/debounce'
import { CategoryType } from '@/types/HeaderType'
import Image from 'next/image'

const HeaderSearch:FC<{isMobile?:boolean}> = ({isMobile}) => {
    const t = useTranslations("HeaderCenterContent")
    const {setOpenCategory, openCategory} = useContext(Context)

    const [isLoading, setIsloading] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>("empty") 
    const [value, setValue] = useState<string>("")
    const [categorySearchData, setCategorySearchData] = useState<CategoryType[]>([])
    const name = debounce(searchValue, 800)

    function handleSearch(text:string){
      setIsloading(true)
      setValue(text)
      if(text){
        setSearchValue(text)
      }
      else{
        setSearchValue("empty")
        // setIsloading(false)
      }
    }

    useEffect(() => {
      instance().get("/categories/search", {params:{name}}).then(res => {
        setIsloading(false)
        setCategorySearchData(res.data)
      })
    },[name])

    function handleSearchClick(data:string){
      setValue(data)
      setSearchValue("empty")
    }

  return (
    <div className={`flex gap-[5px] sm:gap-[10px] ${isMobile ? "hidden-searchbar" :""}`}>
        <Button onBlur={() => setOpenCategory(false)} onClick={() => setOpenCategory(!openCategory)} extraClass='!w-[35%] !h-[40px] sm:!w-[160px] sm:!h-[47px]' icon={<ArrowDownIcon extrClass={`${openCategory && "rotate-[180deg]"}`}/>} iconPosition={"right"}>{t("category")}</Button>
        <div className={`relative ${!isMobile && "w-[65%] sm:w-full"}`}>
            <Input value={value} onChange={(e) => handleSearch(e.target.value)} extraClass={`${!isMobile && "!w-full"}`} placeholder={t("inputPlaceholder")} type='text' name='search'/>
            <Button extraClass='!absolute top-0 right-0 !w-[40px] !h-[40px] sm:!h-[48px] sm:!w-[60px] !p-0'> <SearchIcon extraClass='w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]'/> </Button>
            <ul className={`absolute ${categorySearchData.length > 0 || isLoading ? "" : "h-0 opacity-0"} duration-300 overflow-hidden z-50 w-full sm:w-[60%] py-[20px] shadow-lg shadow-slate-400 bg-white rounded-md`}>
              {isLoading ? <Image className='w-[45px] h-[45px] mx-auto' src={"/loading.png"} alt='Logo' width={45} height={45} priority/> : categorySearchData.map((item:CategoryType) => <li className='pl-[20px] sm:pl-[40px] py-[8px] sm:py-[14px] border-b-[1px] border-slate-300 hover:bg-[#134E9B] hover:text-white text-[13px] sm:text-[16px] duration-100 cursor-pointer' onClick={() => handleSearchClick(item.name)} key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default HeaderSearch