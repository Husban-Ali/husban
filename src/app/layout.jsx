import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hamiz Muzaffer",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="color-scheme" content="light dark"/>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme = 'light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
