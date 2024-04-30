import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import IndividualCards from "./IndividualCards";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";

export default function CharactersCard() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/",
    },
  ];

  return (
    <Card className="mt-5 mb-5">
      <CardHeader className="flex justify-center">
        <h1 className={`${projectTitle.className} text-3xl`}>Personajes</h1>
      </CardHeader>
      <CardBody>
        <IndividualCards />
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
