import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk"
});

export const metadata = {
  metadataBase: new URL("https://www.codework-technologies.com"),
  title: {
    default: "CodeWork Technologies | Smart IT Solutions",
    template: "%s | CodeWork Technologies"
  },
  description:
    "CodeWork Technologies delivers modern software development and IT solutions for teams that need scalable digital products.",
  keywords: [
    "CodeWork Technologies",
    "Software Development",
    "IT Solutions",
    "Next.js",
    "Django",
    "DRF",
    "Business Automation"
  ],
  openGraph: {
    title: "CodeWork Technologies",
    description: "Transforming Businesses with Smart Technology",
    url: "https://www.codework-technologies.com",
    siteName: "CodeWork Technologies",
    type: "website"
  }
};

const themeBootScript = `(() => {
  try {
    const stored = localStorage.getItem('codework-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : (systemDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body suppressHydrationWarning className={`${jakarta.variable} ${grotesk.variable} antialiased`}>
        <ThemeProvider>
          <div className="app-bg min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <StickyCtaBar />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
