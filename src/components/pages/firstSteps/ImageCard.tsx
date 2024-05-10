import { firstStepsImage } from "@/constants/pages/firstSteps";
import { Card, CardFooter, Image } from "@nextui-org/react";

export default function ImageCard() {
  return (
    <Card>
      <Image
        alt="Acerca del proyecto"
        height={400}
        width={300}
        src={firstStepsImage}
      />
    </Card>
  );
}
