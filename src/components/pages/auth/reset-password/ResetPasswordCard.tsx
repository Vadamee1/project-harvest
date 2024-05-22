import { projectTitle } from "@/config/fonts";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPasswordCard() {
  return (
    <Card isBlurred>
      <CardHeader className="flex justify-center">
        <div className={`${projectTitle.className} text-3xl`}>
          Cambiar contraseña
        </div>
      </CardHeader>
      <CardBody>
        <ResetPasswordForm />
      </CardBody>
    </Card>
  );
}
