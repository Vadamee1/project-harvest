import { infoText } from "@/config/fonts";
import {
  sheetData,
  sheetImage,
  sheetInfo,
} from "@/constants/pages/characterSheet";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function SheetBody() {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <Image
          alt="Trama principal"
          height={400}
          width={300}
          src={sheetImage}
          as={NextImage}
          priority
        />
      </div>
      <div className="w-80">
        <div>
          {sheetData.map((item) => (
            <div key={item} className={`${infoText.className}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className={`${infoText.className} mt-5`}>{sheetInfo[0]}</div>
          <div className={`${infoText.className}`}>{sheetInfo[1]}</div>
        </div>
      </div>
    </div>
  );
}
