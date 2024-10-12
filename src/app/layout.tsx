import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Lora, Lato } from "next/font/google";
import Navbar from "~/components/Navbar";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Theta Pharmaceuticals",
  description: "Theta Pharmaceuticals",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${lora.variable} ${lato.variable}`}
    >
      <body className="bg-[#F3F5F5]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
