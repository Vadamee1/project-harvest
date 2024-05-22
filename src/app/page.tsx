import { auth } from "@/auth";
import HomePage from "@/components/pages/home";
import CardText from "@/components/pages/home/Cardtext";
import Appbar from "@/components/shared/Appbar";
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
  const isAdmin = user?.roleId === 1 ? true : false;

  console.log(user?.id);

  return (
    <main>
      <Appbar
        isLoggedIn={isLoggedIn}
        userImage={user?.image}
        isAdmin={isAdmin}
        userId={user?.id}
      />
      <div className="flex min-h-screen items-center justify-center gap-16">
        <div className="w-3/6 hidden md:block">
          <CardText textSize="text-7xl" />
        </div>
        <div className="">
          <div className="md:hidden w-80 mb-5 mt-5">
            <CardText textSize="text-4xl" />
          </div>
          <HomePage />
        </div>
      </div>
    </main>
  );
}
