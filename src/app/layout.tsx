import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Auth from "@/components/auth/Auth";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title Listing",
  description: "List all titles and comments app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth>{children}</Auth>
      </body>
    </html>
  );
}
