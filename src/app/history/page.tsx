import HistoryCard from "@/components/pages/history";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historia",
  description: "Historia inicial de la trama",
  icons: "/LogoHalo.png",
};

export default function HistoryPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <HistoryCard />
    </div>
  );
}
