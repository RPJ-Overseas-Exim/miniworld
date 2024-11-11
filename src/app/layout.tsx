import "~/styles/globals.css";
import Navbar from "~/components/ui/Navbar";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "miniworld",
  description: `Grab the Best Custom Made Miniatures and ready made miniatures
  perfect for anniversary and birthdays`,
  icons: [{ rel: "icon", url: "/logo.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
