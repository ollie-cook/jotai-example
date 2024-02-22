import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotai Example",
  description: "Simple example of Jotai with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {children}
        <p className="absolute bottom-1 right-2 text-sm" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
      </body>
    </html>
  );
}
