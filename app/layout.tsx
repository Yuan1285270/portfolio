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
  const title = "Tsung-Yuan Lin — CS Student + AI & Full-Stack Developer";
  const description =
    "Portfolio of Tsung-Yuan Lin, a CS student and AI & Full-Stack Developer with experience in AI systems, software development, research, and hackathons.";

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
          alt: "Tsung-Yuan Lin — CS Student + AI & Full-Stack Developer",
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
      <body className={`${kanit.variable} antialiased`}>
        <div hidden dangerouslySetInnerHTML={{ __html: "<!-- EXCHANGE SURFACE CONTRACT. THESIS: A personal field journal grounded in coursework and real photographs, without classroom-score promotion. OWN-WORLD: The existing ink-and-mist Kanit portfolio; quiet Chinese reading typography and unaltered personal photos. STORY: See how expression, evidence, collaboration, and daily participation changed across a semester, then inspect coursework excerpts and sharing materials. FIRST VIEWPORT: Left-aligned Chinese title and brief context beside a complete Philadelphia portrait; reading link below. FORM: Annotated field notes, grounded structural candidate 5, seed cfb92fc1. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->" }} />
        {children}
      </body>
    </html>
  );
}
