import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOYORO",
  description: "예술경영 입시의 확실한 길을 잇다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
