import "~/styles/globals.css";
import Navbar from "~/components/layout/Navbar";

import { type Metadata } from "next";
import { Footer } from "~/components/layout/Footer";
import { poppinsRegular } from "public/fonts/fonts";

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
    <html lang="en" className={poppinsRegular.className}>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
