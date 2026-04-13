import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

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
      <ThemeProvider>
        <main
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </LanguageProvider>
  );
}
