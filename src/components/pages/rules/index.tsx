import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import RulesBody from "./RulesBody";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";

export default function RulesCard() {
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
        <h1 className={`${projectTitle.className} text-3xl`}>Reglamento</h1>
      </CardHeader>
      <CardBody>
        <RulesBody />
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
