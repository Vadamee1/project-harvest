import { auth } from "@/auth";
import Form from "@/components/pages/auth/Form";
import { redirect } from "next/navigation";

export default async function Login() {
  const sesion = await auth();
  if (sesion?.user) redirect("/");

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Form />
    </div>
  );
}
