import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext"; // adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <main
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Component {...pageProps} />
      </main>
    </LanguageProvider>
  );
}
