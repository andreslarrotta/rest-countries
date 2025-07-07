import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/app/ui/Header/Header";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bia app - Front end test",
  description: "Una prueba desarrollada por Andres Larrotta para el cargo de Front End Developer en Bia app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
