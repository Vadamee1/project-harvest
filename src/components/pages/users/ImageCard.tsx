import { Card, Image } from "@nextui-org/react";

interface Props {
  image: string | null | undefined;
}

export default function ImageCard({ image }: Props) {
  return (
    <Card>
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
    </Card>
  );
}
