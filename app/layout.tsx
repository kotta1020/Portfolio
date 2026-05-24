import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "週7でふざけてます",
  description:
    "AIで作った謎動画、爆笑ショート、変なキャラ、パロディ作品の保管庫。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
