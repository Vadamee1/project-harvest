import Create from "@/components/pages/admin/characters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear personaje",
  description: "Formulario para la creación de personajes",
  icons: "/LogoHalo.png",
};

export default function CreateCharacters() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Create />
    </div>
  );
}
