import "./globals.css";

import type { Metadata } from "next";

import Particles from "@/components/ui/particles";
import { ThemeProvider } from "@/providers/ThemeProvider";

import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Komiljon",
  description: " - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased relative`}>
        <ThemeProvider>
          <Particles className="absolute inset-0 -z-[1]" quantity={100} ease={80} refresh />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
