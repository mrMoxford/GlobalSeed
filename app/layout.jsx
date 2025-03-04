import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Global Seed",
  description: "Connecting the world through sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}