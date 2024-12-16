import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import  Footer from  "@/components/Footer"
import Image from "next/image";
import Link from "next/link";
 



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clothes design",

  description: "Clothes design",
  icons:{
    icon:{ url:"/ logo.png",type:"image/png"}
      
    }
  }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
