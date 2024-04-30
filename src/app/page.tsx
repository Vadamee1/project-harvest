import HomePage from "@/components/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Página de bienvenida para project harvest",
  icons: "/LogoHalo.png",
};

export default function Home() {
  return (
    <main>
      <div className="flex justify-center min-h-screen items-center">
        <HomePage />
      </div>
    </main>
  );
}
