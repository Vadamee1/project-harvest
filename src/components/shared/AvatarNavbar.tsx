import { logout } from "@/actions/auth/logout";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoArrowBack } from "react-icons/io5";

interface Props {
  userImage: string | undefined | null;
}

export default function AvatarNavbar({ userImage }: Props) {
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
        <DropdownItem onClick={() => logout()} startContent={<IoArrowBack />}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
