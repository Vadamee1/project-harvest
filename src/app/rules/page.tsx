import RulesCard from "@/components/pages/rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reglamento",
  description: "Reglamento de la comunidad",
  icons: "/LogoHalo.png",
};

export default function RulesPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <RulesCard />
    </div>
  );
}
