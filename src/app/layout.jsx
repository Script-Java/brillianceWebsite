import "./globals.css";

export const metadata = {
  title: "Brilliance Skin and Laser",
  description: "Experience advanced treatments in a serene setting, designed to rejuvenate your skin, enhance your beauty, and boost your confidence.",
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
