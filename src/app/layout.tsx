import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "MU Emulator - Chaos Machine",
  description: "MU Emulator - Chaos Machine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
