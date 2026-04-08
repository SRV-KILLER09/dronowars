import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { MotionPerformanceProvider } from "@/components/ui/MotionPerformanceProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DronoWars | JIIT Noida",
  description: "The ultimate FPV drone racing experience.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/jiit-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-background text-foreground`}
      >
        <MotionPerformanceProvider>
          <div className="relative z-10">{children}</div>
        </MotionPerformanceProvider>
      </body>
    </html>
  );
}
