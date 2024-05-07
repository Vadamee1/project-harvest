import { auth } from "@/auth";
import CardLogin from "@/components/pages/auth/CardLogin";
import { redirect } from "next/navigation";

export default async function Login() {
  const sesion = await auth();
  if (sesion?.user) redirect("/");

  return (
    <div className="flex justify-center min-h-screen items-center">
      <CardLogin />
    </div>
  );
}
