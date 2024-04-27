import { REDIRECT_BUTTONS } from "@/constants/home";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  color: "success" | "secondary";
}

export default function RedirectButtons({ color }: Props) {
  return (
    <>
      {REDIRECT_BUTTONS.map((item) => (
        <div key={item.href}>
          <Button
            color={color}
            variant="ghost"
            size="lg"
            radius="md"
            className="text-white w-full"
            href={item.href}
            as={Link}
          >
            {item.label}
          </Button>
        </div>
      ))}
    </>
  );
}
