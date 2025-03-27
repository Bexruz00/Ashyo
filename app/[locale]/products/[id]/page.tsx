"use client"
import Button from '@/components/Button'
import { IMG_API } from '@/hooks/getEnv'
import { ClockIcon, CompareIcon, LikeIcon, MarketIcon, TruckIcon } from '@/icons'
import DiscountProduct from '@/modules/Products/DiscountProducts'
import { formatNumber } from '@/modules/Products/ProductCard'
import Features from '@/modules/Products/SingleProduct/Features'
import Opinions from '@/modules/Products/SingleProduct/Opinions'
import getSingleProduct from '@/service/getSingleProduct'
import { ProductType } from '@/types/ProductType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import './style.css';

const page = () => {
  const t2 = useTranslations("Products")
  const t = useTranslations("single")
  const {id} = useParams()
  const {data:singleData}:{data:ProductType} = getSingleProduct(id)
  const [variantionsActive , setVariantionsActive] = useState<"features" | "opinions">('features')
  console.log(singleData);
  
  
  return (
    <>
      <div className='containers'>
        <h2 className='text-[32px] font-bold mb-[32px] single__title'>{singleData?.product?.name}</h2>
        <div className='single__box flex justify-between items-center sm:mb-[80px] mb-[50px]'>
          <div className='single__imgBox w-[49%] h-[430px] relative bg-[#EBEFF3] rounded-[10px] flex items-center justify-center'>
            <Image className='w-[314px]' src={`${IMG_API}/${singleData.image}`} alt='product__img' priority width={341} height={341}/>
            <div className='flex items-center gap-[20px] absolute top-[26px] right-[31px]'>
              <button className='text-[#5F728B]'><CompareIcon/></button>
              <button className='text-[#5F728B]'><LikeIcon/></button>
            </div>
          </div>
          <div className='single__textBox w-[49%]'>
          <div className='single__colorBox flex flex-col items-center'>
              <strong className='font-normal text-[14px] text-[#515D6C]'>{t("color")}</strong>
              <div className='flex items-center flex-wrap gap-[20px] mt-[20px]'>
                <div className='w-[40px] h-[40px] shadow-md rounded-[3px] bg-[#BA2525]'></div>
                <div className='w-[40px] h-[40px] shadow-md rounded-[3px] bg-[#111111]'></div>
                <div className='w-[40px] h-[40px] shadow-md rounded-[3px] bg-[#FFFFFF]'></div>
                <div className='w-[40px] h-[40px] shadow-md rounded-[3px] bg-[#DADADA]'></div>
              </div>
            </div>
            <p className='text-[32px] font-bold text-[#06172D]'><span className='text-[16px] font-normal text-[#515D6C] lg:mr-[20px] mr-[15px]'>{t("price")} </span>{formatNumber(Number(singleData.price))} UZS</p>
            <p className='single__perMothn px-[97px] py-[20px] bg-[#EBEFF3] text-[#545D6A] text-center rounded-[6px] mt-[36px]'>{t("month")} {formatNumber( Math.floor((singleData.price)/6))} {t("month-pice")}</p>
            <div className='single__buttonBox flex justify-between items-center gap-[16px] mt-[10px]'>
              <Button extraClass='single__button border-[1px] border-solid border-[#134E9B] w-[230px] bg-white !text-[#134E9B] !font-normal !text-[16px]'>{t("add-cart")}</Button>
              <Button extraClass='single__button w-[230px] !font-normal !text-[16px]'>{t("buy")}</Button>
            </div>
            <div className='flex flex-col gap-[20px] mt-[44px]'>
              <p className='flex items-center gap-[16px] font-normal text-[14px] sm:text-[16px] tetx-[#06172DB2]'><span><TruckIcon/></span>{t("truk-word")}</p>
              <p className='flex items-center gap-[16px] font-normal text-[14px] sm:text-[16px] tetx-[#06172DB2]'><span><MarketIcon/></span>{t("market-word")}</p>
              <p className='flex items-center gap-[16px] font-normal text-[14px] sm:text-[16px] tetx-[#06172DB2]'><span><ClockIcon/></span>{t("clock-word")}</p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-[87px] sm:mb-[41px] mb-[20px]'>
          <strong onClick={() => setVariantionsActive('features')} className={`${variantionsActive == "features" ? "text-[#06172D] !font-bold border-[#06172D]" : "text-[#515D6C] border-transparent"} cursor-pointer border-b-[1px] md:tex-[18px] text-[14px] text-[#515D6C] font-normal`}>{t("phone-work")}</strong>
          <strong onClick={() => setVariantionsActive('opinions')} className={`${variantionsActive == "opinions" ? "text-[#06172D] !font-bold border-[#06172D]" : "text-[#515D6C] border-transparent"} cursor-pointer border-b-[1px] md:tex-[18px] text-[14px] text-[#515D6C] font-normal`}>{t("opinion-clients")}</strong>
        </div>
        <div>
          {variantionsActive === "features" ? <Features singleProduct={singleData}/> : ""} 
          {variantionsActive === "opinions" ? <Opinions/> : ""} 
          <Button extraClass='slingle__moreBtn sm:hidden !bg-[#EBEFF3]  mb-[40px] !text-[#134E9B] !w-[50%] !mx-auto !mt-[30px]'> {t("moreBtn")} </Button>
        </div>
      </div>
      <div className='mb-[40px] sm:mt-[100px] mt-[0px]'>
        <DiscountProduct title={t2("secondTitle")}/>
      </div>
    </>
  )
}

export default page