import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { MenuProvider } from "@/components/MenuProvider";
import { Header } from "@/components/Header/Header";
import { Navigation } from "@/components/Navigation/Navigation";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  weight: ["300"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magdaraczko.com"),
  title: "Magda Raczko",
  description:
    "Magda Raczko — artystka interdyscyplinarna. Malarstwo, rysunek, performance, poezja. Portfolio i wystawy.",
  openGraph: {
    title: "Magda Raczko",
    description:
      "Magda Raczko — artystka interdyscyplinarna. Malarstwo, rysunek, performance, poezja.",
    images: [{ url: "/images/homepage.jpg", width: 1920, height: 1080 }],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magda Raczko",
    description:
      "Magda Raczko — artystka interdyscyplinarna. Malarstwo, rysunek, performance, poezja.",
    images: ["/images/homepage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${cormorantGaramond.variable} ${raleway.variable}`}>
      <head>
        <meta name="theme-color" content="#faf8f5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <MenuProvider>
          <Header />
          <Navigation />
          <main>{children}</main>
        </MenuProvider>
      </body>
    </html>
  );
}
