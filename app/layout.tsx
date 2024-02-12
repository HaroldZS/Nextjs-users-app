import type { Metadata } from "next";
import { Navbar } from "@components/Navbar/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { ThemeController } from "@/components/ThemeController/ThemeController";

export const metadata: Metadata = {
  title: "User app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ThemeController />
        <main className="container mx-auto mt-5 mb-10 min-h-[calc(80vh-5rem)] flex justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
