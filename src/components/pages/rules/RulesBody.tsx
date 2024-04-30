import { infoText } from "@/config/fonts";
import { rules, rulesImage } from "@/constants/pages/rules";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function RulesBody() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-8">
        <Image
          alt="Trama principal"
          height={400}
          width={300}
          src={rulesImage}
          as={NextImage}
          priority
        />
      </div>
      <div className="flex flex-col gap-5 w-80">
        {rules.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <div className={`text-xl font-bold ${infoText.className}`}>
              {item.label}
            </div>
            <div className={`${infoText.className}`}>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
