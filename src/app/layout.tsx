import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Cabecalho from "@/componentes/cabecalho";

/*Configura variaveis para as fontes */

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetShop",
  description: "Mini portal do PetShop com noticias,",
  keywords: ["petshop", "animais", "cuidados", "caes", "gatos"],
  authors: [
    {
      name: "Marcio",
      url: "https://github.com/Moreira-Marcio",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${fjallaOne.variable}`}>
        <Cabecalho />

        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
