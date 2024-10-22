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
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nsut.alumninet.in/banner-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Photo of NSUT Admin Building with NSUT logo on Top",
      },
      {
        url: "https://nsut.alumninet.in/banner.png",
        width: 4412,
        height: 2475,
        alt: "Photo of NSUT Admin Building with NSUT logo on Top",
      },
      {
        url: "https://nsut.alumninet.in/square-logo.png",
        width: 500,
        height: 500,
        alt: "Logo of Nalum - ALumni Portal of NSUT",
      },
    ],
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
