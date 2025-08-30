import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashas_dev",
  description: "My portfolio website",
  keywords: [
    "Yashas",
    "developer",
    "portfolio",
    "Next.js",
    "React",
    "Web developer",
    "javascript",
    "dev",
    "front-end",
    "full-stack",
    "ts",
    "js",
    "node.js",
    "AWS",
    "typescript",
    "yashas-dev",
  ],
   openGraph: {
    title: "Yashas_dev – Portfolio",
    description: "Explore my projects, skills, and contact information.",
    url: "https://www.yashas-dev.com",
    siteName: "Yashas_dev",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CWVF2EQMBN"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CWVF2EQMBN');
      `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black font-geist-sans w-full`}
      >
        {children}
      </body>
    </html>
  );
}
