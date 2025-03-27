"use client"
import Image from "next/image"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Opinions() {
  const t = useTranslations("single")
  return (
    <div className="max-w-2xl py-6 sm:py-8">
      {/* First Review */}
      <div className="mb-8">
        <div className="flex md:flex-row flex-col items-start gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/profileImg.png"
              alt="Profile picture"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="sm:text-xl text-[14px] font-medium mb-1">{t("name")}</h3>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="sm:w-4 w-3 sm:h-4 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-3">{t("time")}</p>
            <p className="text-gray-700 sm:text-[14px] text-[12px]">{t("review")}</p>
          </div>
        </div>
      </div>
      {/* Second Review (identical to the first) */}
      <div className="flex md:flex-row flex-col items-start gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/profileImg.png"
              alt="Profile picture"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="sm:text-xl text-[14px] font-medium mb-1">{t("name")}</h3>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="sm:w-4 w-3 sm:h-4 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-3">{t("time")}</p>
            <p className="text-gray-700 sm:text-[14px] text-[12px]">{t("review")}</p>
          </div>
        </div>
    </div>
  )
}

