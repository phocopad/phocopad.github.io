import "./globals.css";
import "./index.css";
import "../styles/custom.css";
import "katex/dist/katex.min.css";

import Footer from "@/components/footer";
import Body from "@/components/body";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
// import { useThemeConfig } from "@/contexts/theme";

export const metadata = {
  title: "petsonal.github.io",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const themeConfig = useThemeConfig()
  // <html lang="en" className="js-focus-visible light" suppressHydrationWarning={true} dir="ltr" style={{ colorScheme: "light" }} >

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="nextra-banner-hidden">
        <div dir="ltr">
          <Header />
          <Body>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>
          </Body>
          <Footer />
        </div>
      </body>
    </html>
  );
}
