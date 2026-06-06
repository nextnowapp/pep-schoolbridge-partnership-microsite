import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PEP × SchoolBridge — Partner Microsite",
  description:
    "A first-mover digital channel for PEP to reach parents, learners, teachers and communities through South Africa's most trusted daily institution: the school. Explore the partnership opportunity between PEP / Pepkor and SchoolBridge.",
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
  openGraph: {
    title: "PEP × SchoolBridge — Partner Microsite",
    description:
      "Own the school ecosystem before anyone else does. A first-mover digital channel for PEP to reach 2.83M parents, 1.2M learners, and 95K teachers through SchoolBridge.",
    type: "website",
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
