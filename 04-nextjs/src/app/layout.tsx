import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meenfa.tech"),
  title: {
    template: "%s | Learn Next.js",
    default: "Learn Next.js",
  },
  description: "Learn Next.js and React with industry-standard projects.",
  keywords: ["react", "nextjs", "courses", "programming", "typescript"],
  openGraph: {
    siteName: "Learn Next.js",
    type: "website",
    locale: "en_US",
    // images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "meenfax",
    // images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 text-black flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}