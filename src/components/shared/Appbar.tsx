"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import SignUpButton from "./SignUpButton";
import AvatarNavbar from "./AvatarNavbar";
import { projectTitle } from "@/config/fonts";
import NextLink from "next/link";
import { navbarItems } from "@/constants/navbarItems";

interface Props {
  isLoggedIn: boolean;
  userImage: string | undefined | null;
  isAdmin: boolean;
  userId: string | undefined;
}

export default function Appbar({
  isLoggedIn,
  userImage,
  isAdmin,
  userId,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <div className="flex gap-1">
            <Link as={NextLink} href="/" color="foreground">
              <span className={`${projectTitle.className} text-3xl`}>
                HARVEST
              </span>
            </Link>
            <span className={`${projectTitle.className}`}>rpg</span>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem className="hidden md:block">
          <Link href={navbarItems[0].href} as={NextLink} color="foreground">
            {navbarItems[0].name}
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link href={navbarItems[1].href} as={NextLink} color="foreground">
            {navbarItems[1].name}
          </Link>
        </NavbarItem>
        {isAdmin && (
          <NavbarItem className="hidden md:block">
            <Link href={navbarItems[2].href} as={NextLink} color="foreground">
              {navbarItems[2].name}
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {isLoggedIn ? (
          <AvatarNavbar userImage={userImage} userId={userId} />
        ) : (
          <SignUpButton />
        )}
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href={navbarItems[0].href} as={NextLink} color="foreground">
            {navbarItems[0].name}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={navbarItems[1].href} as={NextLink} color="foreground">
            {navbarItems[1].name}
          </Link>
        </NavbarMenuItem>
        {isAdmin && (
          <NavbarMenuItem>
            <Link href={navbarItems[2].href} as={NextLink} color="foreground">
              {navbarItems[2].name}
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}
