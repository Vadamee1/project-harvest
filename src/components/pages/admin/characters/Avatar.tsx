import { Avatar } from "@nextui-org/react";

interface Props {
  image: string | null;
  name: string;
}

export default function EndAvatar({ image, name }: Props) {
  return (
    <Avatar
      src={image ? image : "/images/Cat_November.jpg"}
      name={name}
      size="sm"
    />
  );
}
