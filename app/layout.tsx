import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

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
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
