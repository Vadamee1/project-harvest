import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import CustomRedirectButtons from "@/components/shared/CustomRedirectButtons";
import { RedirectButtonsType } from "@/types/shared";
import SheetBody from "./SheetBody";
import ImageSheet from "./ImageSheet";
import SheetCard from "./SheetCard";

export default function Sheet() {
  return (
    <div className="flex gap-14 justify-center items-center">
      <div className="hidden md:block">
        <ImageSheet />
      </div>
      <SheetCard />
    </div>
  );
}
