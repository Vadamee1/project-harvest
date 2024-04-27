import { Image } from "@nextui-org/react";
import NextImage from "next/image";

interface Props {
  src: string;
  height: number;
  width: number;
  alt: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  priority?: boolean;
}

export const CustomImage = ({
  src,
  height,
  width,
  alt,
  radius,
  className,
  priority,
}: Props) => {
  return (
    <Image
      isBlurred
      as={NextImage}
      src={src}
      height={height}
      width={width}
      alt={alt}
      radius={radius}
      className={className}
      priority={priority}
    />
  );
};
