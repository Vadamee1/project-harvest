"use server";

import prisma from "@/prisma";
import { UpdateUserImage } from "@/types/user";
import { v2 as cloundinary } from "cloudinary";

cloundinary.config(process.env.CLOUDINARY_URL ?? "");

export default async function deleteUserImage({ id, image }: UpdateUserImage) {
  const imageName = image.split("/").pop()?.split(".")[0] ?? "";
  try {
    await prisma.user.update({
      where: { id },
      data: {
        image: null,
      },
    });
    await cloundinary.uploader.destroy(imageName);

    return {
      message: "Image has been deleted success",
      severity: "success",
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
