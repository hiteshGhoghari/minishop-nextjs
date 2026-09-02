import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MiniShop - Online Shopping",
    template: "%s | MiniShop",
  },

  description:
    "MiniShop is a modern online shopping platform built with Next.js.",

  keywords: [
    "MiniShop",
    "online shopping",
    "ecommerce",
    "Next.js",
    "React",
  ],

  authors: [
    {
      name: "MiniShop",
    },
  ],

  openGraph: {
    title: "MiniShop - Online Shopping",
    description:
      "Shop your favorite products with MiniShop.",
    type: "website",
    siteName: "MiniShop",
  },

  twitter: {
    card: "summary_large_image",
    title: "MiniShop - Online Shopping",
    description:
      "Shop your favorite products with MiniShop.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
