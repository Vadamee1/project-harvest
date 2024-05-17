import prisma from "@/prisma";

export default async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        nickname: true,
        image: true,
      },
    });

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
}
