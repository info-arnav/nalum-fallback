import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: { template: "%s | Nalum", default: "Nalum - NSUT Alumni Portal" },
  description:
    "Connect with NSUT, NSIT, and DIT alumni to expand your network, explore career opportunities, and give back through Nalum, the official NSUT Alumni Portal.",
  generator: "Nalum",
  applicationName: "Nalum",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Nalum",
    "NSUT",
    "NSIT",
    "DIT",
    "Netaji Subhash University of Technology",
    "Alumni",
  ],
  authors: [{ name: "Arnav Gupta", url: "https://www.arnavgupta.net" }],
  creator: "Netaji Subhash University of Technology",
  publisher: "Netaji Subhash University of Technology",
  metadataBase: new URL("https://nsut.alumninet.in"),
  openGraph: {
    title: "Nalum - NSUT Alumni Portal",
    description:
      "Connect with NSUT, NSIT, and DIT alumni to expand your network, explore career opportunities, and give back through Nalum, the official NSUT Alumni Portal.",
    url: "https://nsut.alumninet.in",
    siteName: "Nalum - NSUT Alumni Portal",
    images: [
      {
        src: "https://nsut.alumninet.in/logo.png",
        width: "250",
        height: "193",
        alt: "Logo of Nalum - The NSUT Alumni Portal",
      },
      {
        src: "https://nsut.alumninet.in/banner.png",
        width: "4412",
        height: "2475",
        alt: "Photo of NSUT Admin Building with NSUT logo on Top",
      },
      {
        src: "https://nsut.alumninet.in/square-logo.png",
        height: "500",
        width: "500",
        alt: "Logo of Nalum - The NSUT Alumni Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nalum - NSUT Alumni Portal",
    description:
      "Connect with NSUT, NSIT, and DIT alumni to expand your network, explore career opportunities, and give back through Nalum, the official NSUT Alumni Portal.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
