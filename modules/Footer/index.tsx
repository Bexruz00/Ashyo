"use client"
import Button from '@/components/Button'
import { AppStoreIcon, FaceBookIcon, PlayMarketIcon, SendText, TelegramIcon, TwitterIcon, YouTubeIcon } from '@/icons'
import React from 'react'
import './style.css';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Input from '@/components/Input';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations("Footer")

  return (
    <div>
      <div className='containers footer'>
        <div className='footer__box flex justify-between items-start gap-[40px]'>
          <div className='flex flex-col gap-[30px]'>
            <div>
              <h4 className='footer__title text-[20px] font-bold text-[#000000B2]'>{t("icons")}</h4>
              <div className='flex items-center gap-[10px] mt-[21px]'>
              <Button extraClass='footer__icon'> <FaceBookIcon /> </Button>
              <Button extraClass='footer__icon'> <YouTubeIcon /> </Button>
              <Button extraClass='footer__icon'> <TelegramIcon /> </Button>
              <Button extraClass='footer__icon'> <TwitterIcon /> </Button>
              <Button extraClass='footer__icon'> <Image src={"/instagram.svg"} alt='instagramIcon' width={21} height={21}/> </Button>
              </div>
            </div>
            <div>
              <h4 className='footer__title text-[20px] font-bold text-[#000000B2]'>{t("download")}</h4>
              <div className='footer__buttonBox flex items-center gap-[10px] mt-[12px]'>
              <Button iconPosition='left' icon={<AppStoreIcon/>} extraClass='footer__iconButton'> App Store </Button>
              <Button iconPosition='left' icon={<PlayMarketIcon/>} extraClass='footer__iconButton'> Google Play </Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[10px] max-w-[256px]'>
            <h4 className='footer__title mb-[6px] mr-[4px] font-bold text-[24px] text-[#000000B2] hover:cursor-pointer'>{t("menu")}</h4>
            <Link href={"/"} className='footer__menu'>{t("about-ashyo")}</Link>
            <Link href={"/"} className='footer__menu'>{t("tems")}</Link>
            <Link href={"/"} className='footer__menu'>{t("policy")}</Link>
            <Link href={"/"} className='footer__menu'>{t("return")}</Link>
            <Link href={"/"} className='footer__menu'>{t("contact-us")}</Link>
          </div>
          <div className='flex flex-col gap-[15px] max-w-[315px]'>
            <h4 className='footer__title mb-[6px] mr-[4px] font-bold text-[24px] text-[#000000B2] hover:cursor-pointer'>{t("call")}</h4>
            <Link className='footer_number mb-[17px] text-[24px] font-bold text-[#06172D] hover:text-[#134E9B] duration-300' href={'tel:+998711234567'}>+998 (93) 874-44-08</Link>
            <div>
              <strong className='text-[16px] font-normal text-[#000000B2]'>{t("question")}</strong>
              <form className='footer__form max-w-[314px] bg-[#EBEFF3] rounded-[6px] mt-[12px] flex items-center'>
                <Input extraClass='max-w-[270px]' type='text' placeholder={t("opinion")}/>
                <button className='p-1 mr-[10px]'><SendText/></button>
              </form>
            </div>
          </div>
        </div>
        <div className='footer__bin'>
          <div className='flex flex-col items-start sm:items-center'>
          <h4 className='footer__title text-[20px] font-bold text-[#000000B2]'>{t("download")}</h4>
              <div className='footer__buttonBox flex b- items-center gap-[10px] mt-[12px]'>
              <Button iconPosition='left' icon={<AppStoreIcon/>} extraClass='footer__iconButton'> App Store </Button>
              <Button iconPosition='left' icon={<PlayMarketIcon/>} extraClass='footer__iconButton'> Google Play </Button>
              </div>
          </div>
          <div className='flex justify-between mt-[26px]'>
            <div className='flex flex-col gap-[5px] sm:gap-[10px] max-w-[256px]'>
              <h4 className='footer__title mb-[6px] mr-[4px] font-bold text-[24px] text-[#000000B2] hover:cursor-pointer'>{t("menu")}</h4>
              <Link href={"/"} className='footer__menu'>{t("about-ashyo")}</Link>
              <Link href={"/"} className='footer__menu'>{t("tems")}</Link>
              <Link href={"/"} className='footer__menu'>{t("policy")}</Link>
              <Link href={"/"} className='footer__menu'>{t("return")}</Link>
              <Link href={"/"} className='footer__menu'>{t("contact-us")}</Link>
            </div>
            <div className='flex flex-col gap-[10px] max-w-[315px] pl-[5px]'>
            <h4 className='footer__title mr-[4px] font-bold text-[24px] text-[#000000B2] hover:cursor-pointer'>{t("call")}</h4>
            <Link className='footer_number text-[24px] font-bold text-[#06172D] hover:text-[#134E9B] duration-300' href={'tel:+998711234567'}>+998 (93) 874-44-08</Link>
            <div>
            <div className='flex flex-wrap items-center gap-[10px]'>
              <Button extraClass='footer__icon'> <FaceBookIcon /> </Button>
              <Button extraClass='footer__icon'> <YouTubeIcon /> </Button>
              <Button extraClass='footer__icon'> <TelegramIcon /> </Button>
              <Button extraClass='footer__icon'> <TwitterIcon /> </Button>
              <Button extraClass='footer__icon'> <Image src={"/instagram.svg"} alt='instagramIcon' width={21} height={21}/> </Button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <p className='font-normal text-[12px] text-[#00000066] mt-[25px] md:mt-[55px]'>{t("register")}</p>
      </div>
    </div>
  )
}

export default Footer