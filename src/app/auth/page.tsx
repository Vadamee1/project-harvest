import { auth } from "@/auth";
import CardLogin from "@/components/pages/auth/CardLogin";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Formulario de inicio de sesión",
  icons: "/LogoHalo.png",
};

export default async function Login() {
  const sesion = await auth();
  if (sesion?.user) redirect("/");

  return (
    <div className="flex justify-center min-h-screen items-center">
      <CardLogin />
    </div>
  );
}
