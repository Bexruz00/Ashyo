"use client";
import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { ArrowDownIcon } from "@/icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next/client";

const LangConfig = () => {
  const [lang, setLang] = useState<"uz" | "ru" | "en" | null>(null); 
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE") || "uz";
    if (locale === "uz" || locale === "ru" || locale === "en") {
      setLang(locale);
    }
  }, []);

  function changeLang(value: "uz" | "ru" | "en") {
    setLang(value);
    router.push(pathname, { locale: value });
  }

  if (!lang) return null; 

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <div className="flex items-center gap-[7px] hover:cursor-pointer">
          <span className="text-[14px] font-medium text-[#545D6A] uppercase"> {lang} </span>
          <ArrowDownIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-2 uppercase cursor-pointer bg-[#134E9B] text-white rounded-md overflow-hidden">
          <div onClick={() => changeLang("ru")} className="text-[14px] font-medium hover:bg-white hover:text-[#134E9B] rounded-md px-5">ru</div>
          <div onClick={() => changeLang("en")} className="text-[14px] font-medium hover:bg-white hover:text-[#134E9B] rounded-md px-5" >en</div>
          <div onClick={() => changeLang("uz")} className="text-[14px] font-medium hover:bg-white hover:text-[#134E9B] rounded-md px-5" > uz</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LangConfig;