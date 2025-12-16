import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "300", "600", "800"],
});

export const metadata: Metadata = {
  title: "E-commerce Platform",
  description: "A platform for all of your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
