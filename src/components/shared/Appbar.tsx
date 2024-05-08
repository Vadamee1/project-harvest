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
}

export default function Appbar({ isLoggedIn, userImage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
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
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} className="hidden md:block">
            <Link href={item.href} as={NextLink} color="foreground">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {isLoggedIn ? <AvatarNavbar userImage={userImage} /> : <SignUpButton />}
      </NavbarContent>
      <NavbarMenu>
        {navbarItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link href={item.href} as={NextLink} color="foreground">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
