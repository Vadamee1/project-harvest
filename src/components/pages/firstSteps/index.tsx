import { RedirectButtonsType } from "@/types/shared";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

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
      <div className="flex gap-14 justify-center items-center">
        <div className="hidden md:block">
          <ImageCard />
        </div>
        <InfoCard />
      </div>
      <CustomRedirectButtons
        buttons={buttons}
        className="flex mt-5 justify-end mr-10 md:mr-20"
      />
    </div>
  );
}
