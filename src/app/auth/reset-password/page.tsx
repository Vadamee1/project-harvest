import ResetPasswordCard from "@/components/pages/auth/reset-password/ResetPasswordCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambiar contraseña",
  description: "Formualrio de cambio de contraseña",
  icons: "/LogoHalo.png",
};

export default function ResetPassword() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <ResetPasswordCard />
    </div>
  );
}
