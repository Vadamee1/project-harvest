import { RedirectButtonsType } from "@/types/shared";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  buttons: RedirectButtonsType[];
  className: string;
}

export default function CustomRedirectButtons({ buttons, className }: Props) {
  return (
    <div className={className}>
      {buttons.map((item) => (
        <Button
          key={item.label}
          color={item.color}
          variant={item.variant}
          as={Link}
          href={item.href}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}
