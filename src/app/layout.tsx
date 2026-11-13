import type { Metadata } from "next";
import "./globals.css";
import "@near-wallet-selector/modal-ui/styles.css";

export const metadata: Metadata = {
  title: "Lumen — Private AI Companion on NEAR",
  description:
    "Your private AI companion NFT that can think and spend under your rules. Powered by NEAR AI TEEs + Intents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0f] text-white">
        {children}
      </body>
    </html>
  );
}