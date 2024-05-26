import { authLoginPath } from "@/constants/paths";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

export default function SignUpButton() {
  return (
    <Button
      variant="ghost"
      color="primary"
      href={authLoginPath}
      as={Link}
      endContent={<IoPerson />}
    >
      Sign up
    </Button>
  );
}
