import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropertyEnhance.co.za",
  description: "AI photo enhancer for estate agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
