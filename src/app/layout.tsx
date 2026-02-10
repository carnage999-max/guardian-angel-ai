import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Guardian Angel AI® | Aware, when you can’t®",
  description: "Guardian Angel AI® is privacy-preserving safety infrastructure designed to protect without surveillance. Institutional-grade safety for your most critical environments.",
  keywords: ["Guardian Angel AI", "Privacy-preserving AI", "Safety Infrastructure", "AI Safety", "Privacy First"],
  openGraph: {
    title: "Guardian Angel AI® | Aware, when you can’t®",
    description: "Institutional-grade safety infrastructure. Privacy and ethics override conversion metrics.",
    url: "https://guardianangeldevice.com",
    siteName: "Guardian Angel AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian Angel AI® | Aware, when you can’t®",
    description: "Aware, when you can’t®. Privacy-first safety infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
