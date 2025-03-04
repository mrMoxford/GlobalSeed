"use client";

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

// Your custom ContentfulPreviewProvider wrapper
export function ContentfulPreviewProvider({ children, ...props }) {
  return (
    <ContentfulLivePreviewProvider {...props}>
      {children}
    </ContentfulLivePreviewProvider>
  );
}
