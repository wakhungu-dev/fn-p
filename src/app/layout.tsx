import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ProviderWrapper } from "./ProviderWrapper";
import Footer from "@/components/front-end/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lynrose",
  description: "Lynrose e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          <Header />
           {children}
          <Footer />
        </ProviderWrapper>
        <Toaster position="bottom-center" reverseOrder={false} />
          </body>
    </html>
  );
}
