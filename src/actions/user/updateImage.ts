"use server";

import prisma from "@/prisma";
import { UpdateUserImage } from "@/types/user";
import { v2 as cloundinary } from "cloudinary";

cloundinary.config(process.env.CLOUDINARY_URL ?? "");

export default async function updateImage({ id, image }: UpdateUserImage) {
  try {
    const r = await cloundinary.uploader.upload(image);

    console.log(r.secure_url);

    await prisma.user.update({
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
