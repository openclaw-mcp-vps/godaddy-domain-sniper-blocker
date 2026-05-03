import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Sniper Blocker — Stop Registrars From Stealing Your Searches",
  description: "Proxy your domain availability checks through anonymous endpoints so registrars can never track, snipe, or buy the domains you research."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="63ac765a-9bda-42b3-8d41-3cbddd74cdd2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
