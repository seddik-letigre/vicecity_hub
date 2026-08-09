import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leonida Intel",
  description: "Hub de préparation Vice City",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
