import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "VehiQl",
  description: "If you dream it, you can drive it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header/>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center px-4 text-gray-600">
            <p>© 2025 VehiQl. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
