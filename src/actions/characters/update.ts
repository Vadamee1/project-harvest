"use server";

import prisma from "@/prisma";
import { CharacterUpdateType } from "@/types/characters";

/* type Params = Omit<CharacterDetailType, "birthday"> & {
  birthday?: Date | null;
}; */

export default async function updateCharacter(character: CharacterUpdateType) {
  console.log(character);
  try {
    await prisma.character.update({
      where: { id: Number(character.id) },
      data: {
        name: character.name,
        age: Number(character.age),
        birthday: character.birthday,
        faction: character.faction,
        height: Number(character.height),
        history: character.history,
        position: character.position,
        profile: character.profile,
        race: character.race,
        weight: Number(character.weight),
      },
    });

    return {
      text: "Character has been updated.",
      severity: "success",
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
