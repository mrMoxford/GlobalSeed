// Assuming you have contentful-live-preview.js available globally via CDN
// If the CDN isn't available, you need to host the library or build a version for the browser.

window.ContentfulLivePreview = window.ContentfulLivePreview || {};

ContentfulLivePreview.init({
  locale: 'en-US',
  debugMode: true,
  enableLiveUpdates: true,
});

ContentfulLivePreview.subscribe('save', {
  callback: async () => {
    const pathname = window.location.pathname;
    await fetch(`/api/revalidate?pathname=${pathname}`);
    window.location.reload();
  },
});
