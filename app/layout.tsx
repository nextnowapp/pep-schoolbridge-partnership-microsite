import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://pep.provincebridge.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "PEP × SchoolBridge — Partner Microsite",
  description:
    "Own the school ecosystem before anyone else does. A first-mover digital channel for PEP to reach parents, learners, teachers and communities through South Africa's most trusted daily institution: the school.",
  keywords: [
    "PEP",
    "Pepkor",
    "SchoolBridge",
    "ProvinceBridge",
    "South Africa",
    "School Partnership",
    "Retail",
    "Education Technology",
  ],
  applicationName: "PEP × SchoolBridge",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "PEP × SchoolBridge",
    title: "PEP × SchoolBridge — Partner Microsite",
    description:
      "Own the school ecosystem before anyone else does. A first-mover digital channel for PEP to reach 2.83M parents, 1.2M learners, and 95K teachers through SchoolBridge.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PEP × SchoolBridge — Partner Microsite" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEP × SchoolBridge — Partner Microsite",
    description:
      "Own the school ecosystem before anyone else does. A first-mover digital channel for PEP through SchoolBridge.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full font-body antialiased">{children}</body>
    </html>
  );
}
