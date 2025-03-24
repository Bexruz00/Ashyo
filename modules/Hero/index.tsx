"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import getBanners from '@/service/getBanners';
import { BunnerType } from '@/types/BunnerType';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IMG_API } from '@/hooks/getEnv';

const Hero = () => {
  const {data:banners} = getBanners()
  const t = useTranslations("HeroContent")
  // autoplay={{ delay: 2500, disableOnInteraction: false}}
  return (
    <div className='h-[450px] slide__box bg-[#F3F0F0]'>
      <div className='containers'>
        <Swiper autoplay={{ delay: 2500, disableOnInteraction: false}} loop={true} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper heroSwipper">
          {banners.map((item:BunnerType) => (
            <SwiperSlide className='slideBox' key={item.id}>
              <div className='w-[596px] text-start'>
                <h2 className='slide__title font-bold text-[44px] text-[#0A1729] mb-[6px]'>{item.name}</h2>
                <p className='slide__subtitle text-[16px] text-[#545D6A] mb-[22px]'>{item.description}</p>
                <Button extraClass='slide__btn'>{t("more")}</Button>
              </div>
              <Image className='slide__img' src={`${IMG_API}/${item.image}`} width={755} height={731} alt="Banner" priority/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero