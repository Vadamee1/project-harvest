import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";
import SheetBody from "./SheetBody";

export default function SheetCard() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/firstSteps",
    },
  ];

  return (
    <Card className="mt-5 mb-5">
      <CardHeader className="flex justify-center">
        <h1 className={`${projectTitle.className} text-3xl`}>
          Ficha de personjae
        </h1>
      </CardHeader>
      <CardBody>
        <SheetBody />
      </CardBody>
      <CardFooter>
        <CustomRedirectButtons
          buttons={buttons}
          className="flex w-full justify-between"
        />
      </CardFooter>
    </Card>
  );
}
