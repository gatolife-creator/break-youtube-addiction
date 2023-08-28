import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";

export const CustomNavbar = () => {
  const pages = {
    home: "/",
    subscriptions: "/subscriptions",
    playlists: "/playlists",
  };
  const { pathname } = useRouter();

  return (
    <Navbar
      isBordered
      className="mb-10"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <Link color="foreground" href="/">
            Minimal
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === pages.home}>
          <Link
            color={pathname === pages.home ? "primary" : "foreground"}
            href="/"
            aria-current={pathname === pages.home ? "page" : "false"}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === pages.subscriptions}>
          <Link
            color={pathname === pages.subscriptions ? "primary" : "foreground"}
            href="/subscriptions"
            aria-current={pathname === pages.subscriptions ? "page" : "false"}
          >
            Subscriptions
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === pages.playlists}>
          <Link
            color={pathname === pages.playlists ? "primary" : "foreground"}
            href="/playlists"
            aria-current={pathname === pages.playlists ? "page" : "false"}
          >
            Playlists
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
