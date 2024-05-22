import RegisterCard from "@/components/pages/auth/new-user/RegisterCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuevo usuario",
  description: "Formulario para la creación de usuarios",
  icons: "/LogoHalo.png",
};

export default function NewUser() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <RegisterCard />
    </div>
  );
}
