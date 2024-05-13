import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { infoText, projectTitle } from "@/config/fonts";
import { aboutUs } from "@/constants/pages/firstSteps";
import {
  characterSheetPath,
  historyPath,
  rulesPath,
  ryPath,
  vadamPath,
} from "@/constants/paths";
import { RedirectButtonsType } from "@/types/shared";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";

export default function InfoCard() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/",
    },
  ];

  return (
    <Card isBlurred className="mt-2 w-5/6 md:w-3/6">
      <CardHeader className="flex justify-center">
        <p className={`${projectTitle.className} text-4xl`}>
          Acerca del proyecto
        </p>
      </CardHeader>
      <CardBody>
        <div className="grid gap-3 text-xl">
          <div>
            <span className={`${infoText.className}`}>{aboutUs[0]}</span>
            <Link as={NextLink} color="warning" href={historyPath}>
              AQUí.
            </Link>
          </div>
          <p className={`${infoText.className}`}>{aboutUs[1]}</p>
          <div>
            <span className={`${infoText.className}`}>{aboutUs[2]}</span>
            <Link as={NextLink} color="warning" href={rulesPath}>
              REGLAMENTO.
            </Link>
          </div>
          <div>
            <span className={`${infoText.className}`}>{aboutUs[3]}</span>
            <Link as={NextLink} color="warning" href={characterSheetPath}>
              FICHA.
            </Link>
          </div>
          <div>
            <span className={`${infoText.className}`}>{aboutUs[4]}</span>
            <Link href={vadamPath} color="danger" as={NextLink}>
              VADAM
            </Link>
            <span> - </span>
            <Link href={ryPath} as={NextLink} className="text-purple-600">
              RY
            </Link>
          </div>
        </div>
      </CardBody>
      <CardFooter className="md:hidden">
        <CustomRedirectButtons
          buttons={buttons}
          className="flex w-full justify-end"
        />
      </CardFooter>
    </Card>
  );
}
