import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { projectTitle } from "@/config/fonts";
import NewUserForm from "./NewUserForm";

export default function RegisterCard() {
  return (
    <Card isBlurred>
      <CardHeader className="flex justify-center">
        <div className={`${projectTitle.className} text-3xl`}>
          Nuevo usuario
        </div>
      </CardHeader>
      <CardBody>
        <NewUserForm />
      </CardBody>
    </Card>
  );
}
