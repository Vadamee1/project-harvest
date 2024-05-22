import { Card, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";

interface Props {
  image: string | null | undefined;
}

export default function ImageCard({ image }: Props) {
  return (
    <Card isBlurred isPressable radius="lg">
      <CardBody>
        {image ? (
          <Image
            alt="Imagen del personaje"
            src={image}
            height={400}
            width={300}
          />
        ) : (
          <p>Not image</p>
        )}
      </CardBody>
    </Card>
  );
}
