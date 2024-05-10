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
      <div className="">
        <CustomRedirectButtons
          buttons={buttons}
          className="flex justify-end mt-5 md:w-11/12 ml-8"
        />
      </div>
    </div>
  );
}
