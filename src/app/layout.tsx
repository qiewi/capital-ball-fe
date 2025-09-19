import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
