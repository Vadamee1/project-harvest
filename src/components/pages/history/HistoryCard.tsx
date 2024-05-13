import { infoText, projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import RedirectButtons from "../../shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";
import { historyInfo } from "@/constants/pages/history";

export default function HistoryCard() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/",
    },
  ];

  return (
    <>
      <Card isBlurred className="mt-2 w-5/6 md:w-3/6">
        <CardHeader className="flex justify-center">
          <h1 className={`${projectTitle.className} text-3xl`}>
            Trama principal
          </h1>
        </CardHeader>
        <CardBody>
          <div className="grid gap-4 justify-center text-xl">
            <div className={`${infoText.className}`}>{historyInfo[0]}</div>
            <div className={`${infoText.className}`}>{historyInfo[1]}</div>
            <div className={`${infoText.className}`}>{historyInfo[2]}</div>
          </div>
        </CardBody>
        <CardFooter className="md:hidden">
          <RedirectButtons
            buttons={buttons}
            className="flex w-full justify-end"
          />
        </CardFooter>
      </Card>
    </>
  );
}
