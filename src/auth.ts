import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { User } from "./types/auth/user";
import prisma from "./prisma";
import bcrypt from "bcryptjs";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (user) return user;
    return undefined;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordMatch = await bcrypt.compareSync(
            password,
            user.password
          );
          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
});
