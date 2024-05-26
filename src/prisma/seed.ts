import prisma from ".";
import roleSeed from "./seeds/auth/roleSeed";
import userSeed from "./seeds/auth/userSeed";

async function main() {
  await roleSeed();
  await userSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
