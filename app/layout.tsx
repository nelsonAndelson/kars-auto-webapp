import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/providers/Providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PromoBanner from "@/components/PromoBanner";
import { Toaster } from "@/components/ui/toaster";
import MetaPixel from "@/components/MetaPixel";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KARS Auto LLC - Auto Repair and Sales",
  description:
    "Kayenga Auto Repair Shop LLC - Your trusted partner for auto repair and sales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MetaPixel />
        <Providers>
          <PromoBanner />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
