import "./globals.css";
import { DM_Sans } from "next/font/google";

const DMSANS = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DMSANS.className}>{children}</body>
    </html>
  );
}
