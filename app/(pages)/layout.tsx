import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "../components/share/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super tags project",
  description: "Geração de super tags",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-testid="main-layout">
      <body className={inter.className}>
          <Header />
          <main className="flex  h-full max-w-screen-xl w-full px-8 xl:px-0">
             {children}
          </main>
        </body>
    </html>
  );
}
