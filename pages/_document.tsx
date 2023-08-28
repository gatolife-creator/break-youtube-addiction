import { Html, Head, Main, NextScript } from "next/document";
import { CustomNavbar } from "@/components/CustomNavbar";
import { NextUIProvider } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NextUIProvider>
          <CustomNavbar />
          <Main />
          <NextScript />
        </NextUIProvider>
      </body>
    </Html>
  );
}
