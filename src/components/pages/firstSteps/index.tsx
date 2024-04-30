import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import FirstStepsBody from "./FirstStepsBody";
import { RedirectButtonsType } from "@/types/shared";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";

export default function FirstStepsCard() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/",
    },
  ];

  return (
    <div>
      <Card className="mt-5 mb-5">
        <CardHeader className="flex justify-center">
          <h1 className={`${projectTitle.className} text-3xl`}>
            Únete al escuadrón
          </h1>
        </CardHeader>
        <CardBody>
          <FirstStepsBody />
        </CardBody>
        <CardFooter>
          <CustomRedirectButtons
            buttons={buttons}
            className="flex w-full justify-between"
          />
        </CardFooter>
      </Card>
    </div>
  );
}