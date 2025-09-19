import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capital Ball - Capital Market Consultation",
  description: "Professional capital market consultation platform built with Next.js 15, TypeScript, Tailwind CSS v4, and Shadcn UI",
  keywords: ["capital market", "financial consultation", "investment", "portfolio management"],
  authors: [{ name: "Capital Ball Team" }],
  openGraph: {
    title: "Capital Ball - Capital Market Consultation",
    description: "Professional capital market consultation platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
