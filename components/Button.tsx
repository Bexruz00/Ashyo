import { ButtonType } from '@/types/ButtonType'
import React, { FC } from 'react'

const Button:FC<ButtonType> = ({extraClass, children, icon, iconPosition, onClick, bage, onBlur}) => {
  
  return (
    <button onBlur={onBlur} onClick={onClick} className={`relative py-[14px] px-[25px] bg-[#134E9B] rounded-[6px] text-[16px] text-white font-semibold flex items-center justify-center gap-[20px] ${extraClass}`}>
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
      {bage && <span className='absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-[#E81504] rounded-full flex items-center justify-center font-bold text-[10px] text-white'>{bage}</span>}
    </button>
  )
}

export default Button