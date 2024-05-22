"use server";

import prisma from "@/prisma";
import { ResetPasswordType } from "@/types/auth/user";
import bcrypt from "bcryptjs";

export default async function resetPassword({
  email,
  password,
}: ResetPasswordType) {
  try {
    await prisma.user.update({
      where: { email },
      data: {
        password: bcrypt.hashSync(password),
      },
    });

    return {
      message: "Password has been updated success",
      severity: "success",
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
