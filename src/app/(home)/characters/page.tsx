import CharactersCard from "@/components/pages/characters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personajes",
  description: "Listado de personjaes ocupados",
  icons: "/LogoHalo.png",
};

export default function CharactersPage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <CharactersCard />
    </div>
  );
}
