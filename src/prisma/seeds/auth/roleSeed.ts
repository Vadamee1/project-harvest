import prisma from "../..";
import roles from "./data/roles";

export default async function roleSeed() {
  try {
    await prisma.$transaction(
      roles.map(({ name, id }) =>
        prisma.role.upsert({
          create: {
            name,
          },
          where: {
            id,
          },
          update: {},
        })
      )
    );
  } catch (error) {
    console.error(error);
  }
}
