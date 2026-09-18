import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAZTAR — Giải pháp số & Dịch vụ công nghệ",
  description: "LAZTAR cung cấp các giải pháp số, phần mềm và tư vấn công nghệ giúp doanh nghiệp phát triển bền vững.",
  openGraph: {
    title: "LAZTAR — Giải pháp số & Dịch vụ công nghệ",
    description: "Giải pháp số, phần mềm và tư vấn công nghệ cho doanh nghiệp.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
