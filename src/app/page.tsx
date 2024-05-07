import { auth } from "@/auth";
import HomePage from "@/components/pages/home";
import Appbar from "@/components/shared/Appbar";
import { SessionUserType } from "@/types/auth/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Página de bienvenida para project harvest",
  icons: "/LogoHalo.png",
};

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  const isLoggedIn = !!session?.user;

  return (
    <main>
      <Appbar isLoggedIn={isLoggedIn} userImage={user?.image} />
      <div className="flex justify-center min-h-screen items-center">
        <HomePage />
      </div>
    </main>
  );
}
