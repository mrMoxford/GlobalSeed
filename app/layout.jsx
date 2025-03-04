import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import Navbar from './components/navbar/Navbar';
import {SpeedInsights} from "@vercel/speed-insights/next";
import Footer from './components/footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
          <SpeedInsights />
          <Footer />
      </body>
    </html>
  );
}
