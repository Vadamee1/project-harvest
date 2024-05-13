import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { infoText } from "@/config/fonts";
import { rules, rulesImage } from "@/constants/pages/rules";
import { RedirectButtonsType } from "@/types/shared";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function RulesImage() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/firstSteps",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-5">
        <Image
          alt="Trama principal"
          height={400}
          width={300}
          src={rulesImage}
          as={NextImage}
          priority
        />
      </div>
      <CustomRedirectButtons
        buttons={buttons}
        className="flex w-full justify-start"
      />
    </div>
  );
}
