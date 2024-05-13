import { projectTitle } from "@/config/fonts";
import SheetBody from "./SheetBody";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";

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
    <Card isBlurred className="mt-2 w-5/6 md:w-3/6">
      <CardHeader className="flex justify-center">
        <h1 className={`${projectTitle.className} text-4xl`}>
          Ficha de personjae
        </h1>
      </CardHeader>
      <CardBody>
        <SheetBody />
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
