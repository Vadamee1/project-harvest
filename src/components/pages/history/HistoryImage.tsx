import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { historyImage } from "@/constants/pages/history";
import { RedirectButtonsType } from "@/types/shared";
import { Image } from "@nextui-org/react";

export default function HistoryImage() {
  const buttons: RedirectButtonsType[] = [
    {
      label: "Regresar",
      color: "warning",
      variant: "ghost",
      href: "/",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-5">
        <Image
          alt="Acerca del proyecto"
          height={400}
          width={300}
          src={historyImage}
        />
      </div>
      <CustomRedirectButtons
        buttons={buttons}
        className="flex w-full justify-start"
      />
    </div>
  );
}
