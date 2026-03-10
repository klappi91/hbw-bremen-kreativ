import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GsapProvider } from "@/components/animations/gsap-provider";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HB Winterg\u00e4rten GmbH | Terrassen\u00fcberdachungen & Sonnenschutz Bremen",
    template: "%s | HB Winterg\u00e4rten GmbH Bremen",
  },
  description:
    "Ma\u00dfgeschneiderte Terrassen\u00fcberdachungen, Winterg\u00e4rten, Markisen und Fenster in Bremen. Pers\u00f6nliche Beratung, hochwertige Materialien, Montage aus einer Hand.",
  keywords: [
    "Terrassen\u00fcberdachung Bremen",
    "Wintergarten Bremen",
    "Markisen Bremen",
    "Fenster Bremen",
    "Haust\u00fcren Bremen",
    "Sonnenschutz Bremen",
    "HB Winterg\u00e4rten",
  ],
  openGraph: {
    title: "HB Winterg\u00e4rten GmbH | Qualit\u00e4t, die Ma\u00dfst\u00e4be setzt",
    description:
      "Ihr Fachbetrieb f\u00fcr Terrassen\u00fcberdachungen, Winterg\u00e4rten und Sonnenschutz in Bremen und Umgebung.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <GsapProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
          >
            Zum Hauptinhalt springen
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
