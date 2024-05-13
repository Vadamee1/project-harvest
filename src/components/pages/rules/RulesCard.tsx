import { infoText, projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";
import { rules } from "@/constants/pages/rules";

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
    <Card isBlurred className="mt-2 w-5/6 md:w-3/6">
      <CardHeader className="flex justify-center">
        <h1 className={`${projectTitle.className} text-3xl`}>Reglamento</h1>
      </CardHeader>
      <CardBody>
        <div className="grid gap-3 text-xl">
          {rules.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <div className={`text-xl font-bold ${infoText.className}`}>
                {item.label}
              </div>
              <div className={`${infoText.className}`}>{item.content}</div>
            </div>
          ))}
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
