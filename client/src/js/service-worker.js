// Import Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.0/workbox-sw.js');

// Precaching assets
workbox.precaching.precacheAndRoute([
  // Add your files to be precached here
  { url: '/', revision: '1234' },
  { url: '/index.html', revision: '5678' },
  // Add other assets like stylesheets, scripts, images, etc.
]);

// Add a route for the Google Fonts API
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Add a route for images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
      }),
    ],
  })
);
