import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import HistoryBody from "./HistoryBody";
import RedirectButtons from "../../shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";

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
      <Card className="mt-5 mb-5">
        <CardHeader className="flex justify-center">
          <h1 className={`${projectTitle.className} text-3xl`}>
            Trama principal
          </h1>
        </CardHeader>
        <CardBody>
          <HistoryBody />
        </CardBody>
        <CardFooter>
          <RedirectButtons
            buttons={buttons}
            className="flex w-full justify-between"
          />
        </CardFooter>
      </Card>
    </>
  );
}
