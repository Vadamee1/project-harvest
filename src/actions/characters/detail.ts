"use server";

import prisma from "@/prisma";
import { CharacterDetailType } from "@/types/characters";

export default async function getCharacterDetail(id: number) {
  try {
    const character = await prisma.character.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        faction: true,
        age: true,
        height: true,
        weight: true,
        position: true,
        race: true,
        history: true,
        birthday: true,
        image: true,
        profile: true,
        user: {
          select: {
            nickname: true,
            id: true,
          },
        },
      },
    });

    const parseCharacter: CharacterDetailType = {
      id: character?.id ? character.id : 1,
      name: character?.name ? character.name : "",
      faction: character?.faction ? character.faction : "",
      age: character?.age ? String(character.age) : "",
      height: character?.height ? String(character.height) : "",
      weight: character?.weight ? String(character.weight) : "",
      position: character?.position ? character.position : "",
      race: character?.race ? character.race : "",
      history: character?.history ? character.history : "",
      birthday: character?.birthday ? character.birthday : null,
      image: character?.image ? character.image : "",
      profile: character?.profile ? character.profile : "",
      user: {
        id: character?.user.id ? character?.user.id : "",
        nickname: character?.user.nickname ? character?.user.nickname : "",
      },
    };

    return parseCharacter;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
