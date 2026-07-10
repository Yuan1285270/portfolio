import type { Metadata } from "next";
import { headers } from "next/headers";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Tsung-Yuan Lin — Full-Stack Developer";
  const description =
    "Tsung-Yuan Lin builds ambitious full-stack, AI, cloud, and IoT products through code and creative problem-solving.";

  return {
    metadataBase,
    title,
    description,
    openGraph: {
      type: "website",
      url: metadataBase,
      title,
      description,
      siteName: "Tsung-Yuan Lin Portfolio",
      images: [
        {
          url: new URL("/og.png", metadataBase).toString(),
          width: 1200,
          height: 630,
          alt: "Tsung-Yuan Lin — Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", metadataBase).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased`}>{children}</body>
    </html>
  );
}
