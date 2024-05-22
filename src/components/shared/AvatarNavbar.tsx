import { logout } from "@/actions/auth/logout";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface Props {
  userImage: string | undefined | null;
  userId: string | undefined;
}

export default function AvatarNavbar({ userImage, userId }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          src={userImage ? userImage : "/images/Cat_November.jpg"}
          color="primary"
          size="md"
          name="Vadam"
          showFallback
          isBordered
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Menú de usuario">
        <DropdownItem as={Link} href={`/users/${userId}`}>
          Perfil
        </DropdownItem>
        <DropdownItem onClick={() => logout()} startContent={<IoArrowBack />}>
          Cerrar sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
