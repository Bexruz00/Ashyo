import { AvatarIcon, CompareIcon, LikeIcon, SavedIcon } from '@/icons/index'
import Button from '@/components/Button'
import { HeaderActionsType } from '@/types/HeaderType'
import React from 'react'

const HeaderActions = () => {
    const actionsList:HeaderActionsType[] = [
        {
            id:1,
            bage:1,
            icon:<CompareIcon/>,
            className:"!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
        {
            id:2,
            bage:11,
            icon:<LikeIcon/>,
            className:"!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
        {
            id:3,
            bage:7,
            icon:<SavedIcon/>,
            className:"!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
        {
            id:4,
            bage:1,
            icon:<AvatarIcon/>,
            className:"!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
    ]
  return (
    <div className='items-center gap-[15px] hidden sm:flex'>
        {actionsList.map((item:HeaderActionsType) => <Button key={item.id} bage={item.bage} extraClass={item.className}> {item.icon} </Button>)}
    </div>
  )
}

export default HeaderActions