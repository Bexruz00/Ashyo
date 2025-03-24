"use client"
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';
import getProducts from '@/service/getProducts';
import { ProductType } from '@/types/ProductType';
import ProductCard from './ProductCard';
import Button from '@/components/Button';
import { Navigation } from 'swiper/modules';


const Products:FC<{extraClass?:string, title:string}> = ({extraClass, title}) => {
    const t = useTranslations("Products")
    const {data:products} = getProducts()
    
    return (
        <div className={`pt-[40px] sm:pt-[80px] products ${extraClass}`}>
            <div className="containers">
                <h2 className='font-bold text-[16px] sm:text-[32px] text-[#000000]'>{title}</h2>
            </div>
            <Swiper navigation={true} modules={[Navigation]} loop={true} slidesPerView={"auto"} spaceBetween={30} className="!hidden md:!flex mySwiper mt-[50px]">
                {products.map((item:ProductType) => <SwiperSlide key={item.id}> <ProductCard item={item}/> </SwiperSlide>)}
            </Swiper>
            <div className='!mt-[20px] md:hidden containers product-mobile-wrapper grid grid-cols-2 !gap-x-[15px] !gap-y-[30px]'>
                {products.map((item:ProductType) => <ProductCard key={item.id} item={item}/>)}
            </div>
            <Button extraClass='sm:hidden !bg-[#EBEFF3] !text-[#134E9B] !w-[50%] !mx-auto !mt-[30px]'> {t("more")} </Button>
        </div>
    )
}

export default Products