import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brunch VIP Startup Summit - Opens | Conecte-se com o futuro dos negócios",
  description: "Participe do evento que vai transformar sua visão sobre startups e inovação. Networking, insights e oportunidades únicas. Inscreva-se gratuitamente!",
  keywords: [
    "startup",
    "summit",
    "empreendedorismo",
    "inovação",
    "networking",
    "opens",
    "evento",
    "negócios",
    "tecnologia"
  ],
  authors: [{ name: "Opens" }],
  creator: "Opens",
  publisher: "Opens",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brunch-vip-startup-summit.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brunch VIP Startup Summit - Opens",
    description: "Participe do evento que vai transformar sua visão sobre startups e inovação. Networking, insights e oportunidades únicas.",
    url: "https://brunch-vip-startup-summit.vercel.app",
    siteName: "Brunch VIP Startup Summit",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brunch VIP Startup Summit - Opens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunch VIP Startup Summit - Opens",
    description: "Participe do evento que vai transformar sua visão sobre startups e inovação.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="brunch-vip/logo_opens.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="brunch-vip/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
