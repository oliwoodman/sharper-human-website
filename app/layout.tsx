import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sharper Human | Natural Brain Supplement & Nootropic Stack",
  description: "Premium nootropic supplement for founders and entrepreneurs. 20 research-backed ingredients. Zero stimulants. Built for founders.",
  openGraph: {
    title: "Sharper Human | Natural Brain Supplement & Nootropic Stack",
    description: "20 research-backed ingredients. Zero stimulants. Built for founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
