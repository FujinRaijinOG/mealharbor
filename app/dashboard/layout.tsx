// app/dashboard/layout.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../../globals.css";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../../context/AuthContext";
import ToasterContext from "../../context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <NextTopLoader color="#006BFF" crawlSpeed={300} showSpinner={false} shadow="none" />
        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          <AuthProvider>
            <Header />
            <ToasterContext />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
