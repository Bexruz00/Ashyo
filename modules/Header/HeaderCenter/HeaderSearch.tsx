import Button from "@/components/Button";
import { Link } from "@/i18n/navigation";
import { ArrowDownIcon, CompareIcon } from "@/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HeaderSearch = () => {
  const t = useTranslations("HeaderSearchContent");
  return (
    <div className="containers">
      <Link className="flex items-center gap-[1px]" href={"/"}>
        <Image className="w-[48px] scale-[1.5] h-[48px]" src={"/logo.svg"} alt="Logo" width={48} height={48} priority />
        <strong className="text-[36px] font-black text-[#134E9B] leading-[100%]"> Ashyo </strong>
      </Link>
      <div>
        <Button>
          <span>{t("category")}</span>
          <ArrowDownIcon />
        </Button>
        <Button bage={2} exrtaClass="!w-[50px] !h-[50px] !p-0 !bg-[#EBEFF3]">
          <CompareIcon />
        </Button>
      </div>
    </div>
  );
};

export default HeaderSearch;
