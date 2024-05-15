import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { IoAddCircleOutline } from "react-icons/io5";

export default function ImageCard() {
  return (
    <Card isBlurred isPressable radius="lg">
      <CardBody>
        <div className="flex justify-center items-center h-80 w-64">
          <IoAddCircleOutline className="text-4xl" />
        </div>
      </CardBody>
    </Card>
  );
}
