import getCharacterDetail from "@/actions/characters/detail";
import { auth } from "@/auth";
import DetailCard from "@/components/pages/characters/detail";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Personajes",
  description: "Consulta la inforación detallada de un personjae",
  icons: "/LogoHalo.png",
};

export default async function CharacterDetail({
  params,
}: {
  params: { id: number };
}) {
  const character = await getCharacterDetail(Number(params.id));
  const session = await auth();
  if (!session) redirect("/characters");

  const userLogged = session?.user?.id;
  const userCharacter = character?.user.id;

  const isOwner = userLogged === userCharacter ? true : false;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <DetailCard character={character} isOwner={isOwner} />
    </div>
  );
}
