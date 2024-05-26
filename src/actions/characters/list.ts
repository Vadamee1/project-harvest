import prisma from "@/prisma";
import { CharacterList } from "@/types/characters";

export default async function getCharacters() {
  try {
    const characters: CharacterList[] = await prisma.character.findMany({
      select: {
        id: true,
        name: true,
        image: true,
      },
    });

    return characters;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
