import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Genius | Curated AI Prompts That Actually Work",
  description: "Tested and proven AI prompts for ChatGPT, Claude, Midjourney, and more. Browse 50+ free prompts or get premium access to 1000+ prompts.",
  keywords: "AI prompts, ChatGPT prompts, Midjourney prompts, Claude prompts, AI prompt library, prompt engineering",
  openGraph: {
    title: "AI Prompt Genius | Curated AI Prompts",
    description: "Tested and proven AI prompts that actually work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
