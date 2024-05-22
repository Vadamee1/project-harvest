import prisma from "@/prisma";
import { UserType } from "@/types/user";

export default async function getUser(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        nickname: true,
        email: true,
        roleId: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
