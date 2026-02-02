import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Napier SkillSwap",
  description: "Connect with fellow Napier students for tutoring and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mock login state for verification, set to false initially
  const isUserLoggedIn = false;

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-[var(--pk-gray-soft)]">
        <Navbar isLoggedIn={isUserLoggedIn} />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
