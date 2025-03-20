import { ButtonType } from '@/types/HeaderType'
import React, { FC } from 'react'

const Button:FC<ButtonType> = ({exrtaClass, children, icon, iconPosition, onclick, bage}) => {
  
  return (
    <button onClick={onclick} className={`relative py-[14px] px-[25px] bg-[#134E9B] rounded-[6px] text-[16px] text-white font-semibold flex items-center justify-center gap-[20px] ${exrtaClass}`}>
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
      {bage && <span className='absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-[#E81504] rounded-full flex items-center justify-center font-bold text-[10px] text-white'>{bage}</span>}
    </button>
  )
}

export default Button