import LangConfig from '@/components/LangConfig'
import { Link } from '@/i18n/navigation'
import { LoactionIcon } from '@/icons'
import { HeaderTopNavListType } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import React from 'react'

const HeaderTop = () => {
  const t = useTranslations("HeaderTopNavList")

  const navList:HeaderTopNavListType[] = [
    {
      id:1,
      icon:<LoactionIcon/>,
      title: t("tashkent"),
      path: "/"
    },
    {
      id:2,
      icon: null,
      title: t("about-us"),
      path: "/about-us"
    },
    {
      id:3,
      icon: null,
      title: t("products"),
      path: "/products"
    },
    {
      id:4,
      icon: null,
      title: t("contacts"),
      path: "/contacts"
    }
  ]

  return (
    <div className='py-[11px] bg-[#EBEFF3] hidden sm:block'>
      <div className='containers flex items-center justify-between'>
        <nav className='flex items-center gap-[15px]'>
          {navList.map((item:HeaderTopNavListType) => <Link className='flex items-center gap-3 text-[14px] text-[#545D6A] hover:text-[#134E9B] duration-300' key={item.id} href={item.path}><span>{item.icon && item.icon}</span>{item.title}</Link>)}
        </nav>
        <div className='flex items-center gap-[25px]'>
          <Link className='text-[14px] font-semibold text-[#545D6A] hover:text-[#134E9B] duration-300' href={'tel:+998711234567'}>+998 (93) 874-44-08</Link>
          <LangConfig/>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop