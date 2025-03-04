import { draftMode } from "next/headers";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Global Seed",
  description: "Connecting the world through sports",
};

export default function RootLayout({ children }) {
  const {isEnabled} = draftMode();
  return (
    <html lang="en">
     
      <body >
        <Navbar/>
        <ContentfulLivePreviewProvider
      locale="en-US" // This is required and allows you to set the locale once and have it reused throughout the preview
      enableInspectorMode={isEnabled} // This allows you to toggle the inspector mode which is on by default
      enableLiveUpdates={isEnabled} // This allows you to toggle the live updates which is on by default
      debugMode={isEnabled} // This allows you to toggle the debug mode which is off by default
      targetOrigin="https://app.contentful.com" // This allows you to configure the allowed host of the live preview (default: ['https://app.contentful.com', 'https://app.eu.contentful.com'])
    >
        {children}
        </ContentfulLivePreviewProvider>
        <SpeedInsights />
        <Footer/>
      </body>
      
    </html>
  );
}