"use server";

import prisma from "@/prisma";
import { UpdateCharacterImage } from "@/types/characters";
import { v2 as cloundinary } from "cloudinary";

cloundinary.config(process.env.CLOUDINARY_URL ?? "");

export default async function saveImage({ id, image }: UpdateCharacterImage) {
  try {
    const r = await cloundinary.uploader.upload(image);

    await prisma.character.update({
      where: { id },
      data: {
        image: r.secure_url,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
