import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import AuthProvider from "../components/AuthProvider";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI 助手",
  description: "您的智能助手",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-screen bg-[#343541] text-white">
            <Sidebar />
            <main className="flex-1 relative">
              <Header />
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
} 