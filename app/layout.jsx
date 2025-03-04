import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import Navbar from './components/navbar/Navbar';
import {SpeedInsights} from "@vercel/speed-insights/next";
import Footer from './components/footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="/contentful-live-preview.js"
        ></script>
      </head>
      <body>
        <ContentfulLivePreviewProvider
          locale="en-US" // Set the locale for live preview
          enableInspectorMode={true} // Optional: Enable Contentful live preview inspector
          enableLiveUpdates={true} // Optional: Enable live updates for changes
          debugMode={false} // Optional: Enable debug logs
          targetOrigin="https://app.contentful.com" // Optional: Define allowed origin
        >
          <Navbar />
          {children}
          <SpeedInsights />
          <Footer />
        </ContentfulLivePreviewProvider>
      </body>
    </html>
  );
}
