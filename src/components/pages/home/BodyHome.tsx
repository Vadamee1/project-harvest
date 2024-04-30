import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import RedirectButtons from "./RedirectButtons";

interface Props {
  color: "success" | "secondary";
  href: string;
  height: number;
}

export default function BodyHome({ color, href, height }: Props) {
  return (
    <div className="grid justify-center gap-3">
      <div className="flex justify-center">
        <Image
          alt="Imagen promocional"
          height={height}
          width={300}
          src={href}
          as={NextImage}
          priority
          isBlurred
        />
      </div>
      <RedirectButtons color={color} />
    </div>
  );
}
