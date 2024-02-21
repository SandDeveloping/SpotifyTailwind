import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify listen your musics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[#09090B] text-white">{children}</body>
    </html>
  );
}
