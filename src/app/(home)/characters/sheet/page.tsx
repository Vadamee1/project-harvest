import SheetCard from "@/components/pages/characters/sheet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ficha de personaje",
  description: "Plantilla de ficha",
  icons: "/LogoHalo.png",
};

export default function SheetPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <SheetCard />
    </div>
  );
}
