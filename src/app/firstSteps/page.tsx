import FirstStepsCard from "@/components/pages/firstSteps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primeros pasos",
  description: "Primeros pasos para ingresar",
  icons: "/LogoHalo.png",
};

export default function FirstStepsPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <FirstStepsCard />
    </div>
  );
}
