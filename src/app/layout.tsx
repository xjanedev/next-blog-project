import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/Providers";
import "./globals.css";

import { Noto_Sans } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Courier_Prime } from "next/font/google";

const sans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
});

const cp = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  // object 형태로 만들어준다.
  title: {
    default: "my-log",
    template: "my-log | %s",
  },
  description: "full-stack-dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body>
        <Providers>
          <header className={cp.className}>
            <Header />
          </header>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
