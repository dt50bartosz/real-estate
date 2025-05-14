import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/componet/header/header";
import Footer from "@/componet/footer/footer";
import CookieBanner from "@/componet/cookie-banner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <CookieBanner /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}

