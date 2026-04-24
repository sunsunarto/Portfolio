import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";
import { ConfigProvider } from "antd";
import { useContext } from "react";

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
        <ThemeWrapper>
          <main
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Component {...pageProps} />
          </main>
        </ThemeWrapper>
      </ThemeProvider>
    </LanguageProvider>
  );
}

// ✅ Wrap everything in ConfigProvider once
function ThemeWrapper({ children }) {
  const { tokens } = useContext(ThemeContext);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: tokens.textPrimary,   // one global text color
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
