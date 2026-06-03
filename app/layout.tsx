import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "週7でふざけてます",
  description:
    "AIで作った謎動画、爆笑ショート、変なキャラ、パロディ作品の保管庫。",
  verification: {
    google: "vQX1iMmPe6z078zYbB4H9RAtK-ortVFxHpMzgvQYGvo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T8EXZGE1LR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T8EXZGE1LR');
          `}
        </Script>
      </body>
    </html>
  );
}
