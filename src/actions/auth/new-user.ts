"use server";

import prisma from "@/prisma";
import { CreateUserType } from "@/types/auth/user";
import bcrypt from "bcryptjs";

export default async function CreateUser({
  nickname,
  email,
  password,
}: CreateUserType) {
  try {
    await prisma.user.create({
      data: {
        nickname,
        email,
        password: bcrypt.hashSync(password),
        roleId: 2,
      },
    });

    return {
      message: "User has been created success.",
      severity: "success",
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
