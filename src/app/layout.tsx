import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header>
          <h1>
            <Link href="/">PetShop</Link>
          </h1>
          <nav>
            <Link href="/">Blog</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </header>
        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
