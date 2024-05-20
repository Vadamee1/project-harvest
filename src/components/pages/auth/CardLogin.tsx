import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Form from "./Form";
import { projectTitle } from "@/config/fonts";

export default function CardLogin() {
  return (
    <Card isBlurred>
      <CardHeader className="flex justify-center">
        <div className={`${projectTitle.className} text-3xl`}>Ingresar</div>
      </CardHeader>
      <CardBody>
        <Form />
      </CardBody>
    </Card>
  );
}
