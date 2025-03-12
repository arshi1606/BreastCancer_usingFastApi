import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar_L";
import Footer from "@/components/Footer";
import ClientApolloProvider from "@/components/ClientApolloProvider"; // Adjust the import path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breast Cancer Detection Model",
  icons: {
    icon: 'favicon.svg',
  },
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientApolloProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientApolloProvider>
      </body>
    </html>
  );
}
