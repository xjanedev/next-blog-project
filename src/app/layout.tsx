import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/Providers";
import { Noto_Sans } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

const cp = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    default: "blog",
    template: "blog | %s",
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
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
