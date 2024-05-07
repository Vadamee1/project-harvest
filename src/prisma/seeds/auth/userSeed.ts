import prisma from "../..";
import users from "./data/users";

export default async function userSeed() {
  try {
    await prisma.$transaction(
      users.map(({ nickname, email, password, roleId }) =>
        prisma.user.upsert({
          create: {
            email,
            nickname,
            password,
            roleId,
          },
          where: {
            email,
          },
          update: {},
        })
      )
    );
  } catch (error) {
    console.error(error);
  }
}
