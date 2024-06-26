import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/(components)/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TJ ATC",
  description: "Website of Thomas Jefferson High School's Assistive Technology Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <main>
        {children}
        </main>
        
        <Footer/>
      </body>
      
    </html>
  );
}
