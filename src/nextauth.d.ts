import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nickname: string;
      email: string;
      password: string;
      roleId: number;
      image: string | null | undefined;
      createdAt: Date;
      updatedAt: Date;
    } & DefaultSession["user"];
  }
}
