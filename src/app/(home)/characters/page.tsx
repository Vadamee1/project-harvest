import getCharacters from "@/actions/characters/list";
import CharactersCard from "@/components/pages/characters";
import { CharacterList } from "@/types/characters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personajes",
  description: "Listado de personjaes ocupados",
  icons: "/LogoHalo.png",
};

export default async function CharactersPage() {
  const characters: CharacterList[] = await getCharacters();

  return (
    <div className="flex justify-center min-h-screen items-center">
      <CharactersCard characters={characters} />
    </div>
  );
}
