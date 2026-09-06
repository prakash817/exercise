import { Geist, Geist_Mono } from "next/font/google";
import "../policy.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PolicyLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col scroll-smooth antialiased`}
    >
      {children}
    </div>
  );
}
