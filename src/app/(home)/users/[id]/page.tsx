import getUser from "@/actions/user/get-user";
import { auth } from "@/auth";
import UserCard from "@/components/pages/users";
import { defaultUser } from "@/constants/pages/defaultUser";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Detalle del usuario",
  icons: "/LogoHalo.png",
};

export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session) redirect("/");
  const loggedUser = session?.user?.id;
  const profileUser = params.id;

  const userPage = await getUser(profileUser);

  const isOwner = loggedUser === profileUser ? true : false;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <UserCard user={userPage ? userPage : defaultUser} isOwner={isOwner} />
    </div>
  );
}
