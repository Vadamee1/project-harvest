import { infoText } from "@/config/fonts";
import { historyImage, historyInfo } from "@/constants/pages/history";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function HistoryBody() {
  return (
    <div className="grid">
      <div className="flex justify-center mb-8">
        <Image
          alt="Trama principal"
          height={400}
          width={300}
          src={historyImage}
          as={NextImage}
          priority
        />
      </div>
      <div className="grid gap-4 justify-center w-80">
        <div className={`${infoText.className}`}>{historyInfo[0]}</div>
        <div className={`${infoText.className}`}>{historyInfo[1]}</div>
        <div className={`${infoText.className}`}>{historyInfo[2]}</div>
      </div>
    </div>
  );
}
