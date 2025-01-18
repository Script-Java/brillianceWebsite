import "./globals.css";

export const metadata = {
  title: "Brilliance Skin and Laser - Premier Medspa in Plano, TX",
  description: "Discover premium medspa services like laser treatments and skin rejuvenation at Brilliance Skin and Laser in Plano, TX.",
  openGraph: {
    title: "Brilliance Skin and Laser - Premier Medspa in Plano, TX",
    description: "Experience world-class medspa services with advanced treatments for skin rejuvenation and beauty enhancements in Plano, TX.",
    url: "https://www.brillianceskin.us/",
    siteName: "Brilliance Skin and Laser",
    images: [
      {
        url: "https://www.brillianceskin.us/images/s2.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Brilliance Skin and Laser Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  canonical: "https://www.brillianceskin.us/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        data-theme="cupcake"
      >
        {children}
      </body>
    </html>
  );
}
