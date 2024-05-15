"use server";

import prisma from "@/prisma";
import { CreateCharacterType } from "@/types/characters";

export default async function createCharacter({
  faction,
  name,
  profile,
  userId,
}: CreateCharacterType) {
  try {
    await prisma.character.create({
      data: {
        faction,
        name,
        profile,
        userId,
      },
    });

    return {
      text: "Character has been created success",
      severity: "success",
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
