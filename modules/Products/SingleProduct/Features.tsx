"use client"
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

const Features:FC<{singleProduct:any}> = ({singleProduct}) => {
  const t = useTranslations("single")

  
  return (
    <div className="bg-white rounded-lg max-w-[651px] w-full overflow-hidden sm:mb-[20px] mb-[30px]">
            <div className="divide-y divide-gray-200">
              {singleProduct?.configurations?.map((item: any) => (
                <div key={item.id} className="grid grid-cols-2 py-3">
                  <div className="text-gray-600">{item?.variationOption?.variation?.name}</div>
                  <div className="text-gray-900 font-medium">{item?.variationOption?.value}</div>
                </div>
              ))}
              <div className="grid grid-cols-2 py-3">
                <div className="text-gray-600">{t("cm-cart")}</div>
                <div className="text-gray-900 font-medium">2</div>
              </div>

              <div className="grid grid-cols-2 py-3">
                <div className="text-gray-600">{t("bettry")}</div>
                <div className="text-gray-900 font-medium">4000 amp</div>
              </div>

              <div className="grid grid-cols-2 py-3">
                <div className="text-gray-600">{t("core")}</div>
                <div className="text-gray-900 font-medium">8</div>
              </div>

              <div className="grid grid-cols-2 py-3">
                <div className="text-gray-600">{t("processor")}</div>
                <div className="text-gray-900 font-medium">MediaTek Helio P35 (MT6765)</div>
              </div> 
            </div>
    </div>
  )
}

export default Features

