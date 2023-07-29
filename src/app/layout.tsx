import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Business Card Maker",
  description: "Make your own business card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-50">
        <Navbar />

        <div className="container max-w-7xl mx-auto h-full">{children}</div>
      </body>
    </html>
  );
}
