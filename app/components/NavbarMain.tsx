import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { itemsNav } from "./utils/itemsNavbar";
import SwitchMode from "./Switch/SwitchMode";

function NavbarMain() {
  return (
    <Navbar disableAnimation isBordered className="bg-transparent">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {itemsNav.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href="#"
              className="text-gray-300 font-medium"
            >
              {item}{" "}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <SwitchMode />

      <NavbarMenu>
        {itemsNav.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === itemsNav.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarMain;
