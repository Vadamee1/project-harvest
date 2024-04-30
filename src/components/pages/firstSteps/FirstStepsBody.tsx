import { infoText } from "@/config/fonts";
import { firstStepsImage, firstStepsInfo } from "@/constants/pages/firstSteps";
import {
  characterSheetPath,
  rulesPath,
  ryPath,
  vadamPath,
} from "@/constants/paths";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";

export default function FirstStepsBody() {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <Image
          alt="Trama principal"
          height={400}
          width={300}
          src={firstStepsImage}
          as={NextImage}
          priority
        />
      </div>
      <div className="grid gap-4 justify-center w-80">
        <div>
          <span className={`${infoText.className}`}>{firstStepsInfo[0]}</span>
          <Link href={rulesPath} color="warning" as={NextLink}>
            Reglamento
          </Link>
        </div>
        <div className={`${infoText.className}`}>{firstStepsInfo[1]}</div>
        <div>
          <span className={`${infoText.className}`}>{firstStepsInfo[2]}</span>
          <Link href={characterSheetPath} color="warning" as={NextLink}>
            Ficha
          </Link>
        </div>
        <div>
          <span className={`${infoText.className}`}>{firstStepsInfo[3]}</span>
          <div className="">
            <Link href={vadamPath} color="danger" as={NextLink}>
              Vadam
            </Link>
            <span> - </span>
            <Link href={ryPath} as={NextLink} className="text-purple-600">
              Ry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
