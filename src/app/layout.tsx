import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className= "  flex gap-5 justify-end h-28 text-lg bg-purple-800 items-center">
          <div className="indent-3 flex items-center h-14 bg-purple-50 rounded-full border-4 border-purple-950 opacity-80 w-44">
            This is a header
          </div>
          <div className="indent-2 flex items-center h-14 bg-purple-50 rounded-full border-4 border-purple-950 opacity-80 w-44 text-nowrap">
            This is a header 2
          </div>

        </div>
        
        {children}</body>


        <footer className="bg-purple-800 py-40">
            This is footer
          </footer>
        
        
    </html>
  );
}
