self.__WB_DISABLE_DEV_LOGS = false;
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
);
if (workbox) {
    console.log(`Workbox is loaded`);
} else {
    console.log(`Workbox didn't load`);
}

// Switch debug logging on/off here. Default is on in dev and off in prod.
workbox.setConfig({ debug: false });

// workbox.routing.registerRoute(
//     ({ event, url }) => {
//         console.log(url);
//     },
//     new workbox.strategies.CacheFirst({
//         cacheName: 'js-cache',
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 100,
//                 // Don't keep any entries for more than 30 days.
//                 maxAgeSeconds: 30 * 24 * 60 * 60,
//                 // Automatically cleanup if quota is exceeded.
//                 purgeOnQuotaError: true,
//             }),
//         ],
//     }),
// );

// JS Cache
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:js)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'js-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 100,
                // Don't keep any entries for more than 30 days.
                maxAgeSeconds: 30 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true,
            }),
        ],
    }),
);

// Image Cache
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif|cur|webp)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 100,
                // Don't keep any entries for more than 30 days.
                maxAgeSeconds: 30 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true,
            }),
        ],
    }),
);

// Font Cache
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:eot|otf|ttf|woff|woff2|ani)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'font-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 100,
                // Don't keep any entries for more than 30 days.
                maxAgeSeconds: 30 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true,
            }),
        ],
    }),
);

// Style Cache
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:css)'),
    new workbox.strategies.CacheFirst({
        cacheName: 'js-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 100,
                // Don't keep any entries for more than 30 days.
                maxAgeSeconds: 30 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true,
            }),
        ],
    }),
);