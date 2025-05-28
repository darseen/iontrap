import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "IONTRAP",
  description: "N/A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black font-serif text-white italic antialiased`}>
        <div className="fixed top-[-6rem] right-[11rem] -z-10 h-20 w-[68.75rem] rounded-full bg-zinc-500 blur-[10rem]" />
        <div className="fixed top-[-1rem] left-[-35rem] -z-10 h-20 w-[68.75rem] rounded-full bg-[#2b2a2a] blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
