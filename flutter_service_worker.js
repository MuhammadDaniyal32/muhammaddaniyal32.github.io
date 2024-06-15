'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "96f11ab536efddfc3507d3080b7f330a",
"assets/AssetManifest.bin.json": "abb64107507c81fead18354a3abc06fa",
"assets/AssetManifest.json": "12a79a28d1420d6ce05492f130b0c108",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/images/android_logo.png": "6225755a721ff7757ce35fb0031c5aa2",
"assets/assets/images/api-interface.png": "7fbf522543b89a958fa310aaec76d74d",
"assets/assets/images/c%2523_logo.png": "a2ac4142b22beebab6ab6db956f66f5d",
"assets/assets/images/dart.png": "6e9cdfb3178b7d68e392fa8399630f0c",
"assets/assets/images/ezgif-3-7162fb7e6d.gif": "769e343cec3de9f638911859aa679fca",
"assets/assets/images/figma.png": "16feaa6fbde1aeb849cd3a4d99ccb801",
"assets/assets/images/firebase.png": "978bd80e3cdf987dbaddb44a9c9b8434",
"assets/assets/images/flutter.png": "bb75a8da0b85488d87e59a2e522115c0",
"assets/assets/images/flutterimg.png": "05ad3ca19a2f2666f9368eee460aea0b",
"assets/assets/images/githublogo.png": "3d5e73d93eb444d2b38f3ac2caf53c05",
"assets/assets/images/hand_weaving.gif": "5a555338873b1e27a5bdfff52d1e28bf",
"assets/assets/images/java.png": "3239d13f6545753a92b8daa6ed29053c",
"assets/assets/images/logo.png": "47dbcb54438207aef8d6c61d7e9645ac",
"assets/assets/images/mypic.jpg": "e4a82e456061541d0b40b7347a2b4c6c",
"assets/assets/images/php.png": "d220f28a1d60d04530bb2c81c41e3683",
"assets/assets/images/postman-icon.png": "872de4667c364065586a18df922bdf31",
"assets/assets/images/sql.png": "0eebb1788ad1e46530a84cee76aa27c1",
"assets/assets/images/sqlite_logo.png": "4189991610dc7769f7063dd566c8bbe8",
"assets/assets/images/sqlserver_logo.png": "3620c268adf3c72a2d9959519b92d9ac",
"assets/assets/images/weather_api_logo.jpg": "567ed81b604748b156c0946742f425a1",
"assets/assets/images/winforms-logo.png": "fd08e38f3ebbd56c5e71f89d086c850b",
"assets/assets/project_banners/bigcart_banner_1.png": "14e566233eaff6e6f00f0464a13b0a68",
"assets/assets/project_banners/bigcart_logo.png": "07ba5c239a300578d709b109ba3970fc",
"assets/assets/project_banners/jobposting_banner_1.png": "1c960f02df3de2f0b918851da105a4d5",
"assets/assets/project_banners/onlineshoppingcenter_banner_1.jpg": "505f718e9ee7546d99048aeffd4306e2",
"assets/assets/project_banners/pcr_banner_1.png": "8b73c58a203b73b4250441015d6c5a10",
"assets/assets/project_banners/salon_banner_1.png": "8728fee55edebc8881f66d418a52f2a2",
"assets/assets/project_banners/salon_banner_2.png": "4da1b942dd7164ce8868c342285dbe83",
"assets/assets/project_banners/sms_banner_1.jpg": "717c74720f3ef8fb6bff6a3ac3fcf2bb",
"assets/assets/project_banners/Thumbnail%2520(1).jpg": "540c0def399e6d9a3b2e097902655b4e",
"assets/assets/project_banners/Thumbnail%2520(2).jpg": "1b22185083a356c7d93505eaa4f99587",
"assets/assets/project_banners/tictactoe_banner_1.png": "94ee9c141a7a30c04c96abcef555e227",
"assets/assets/project_banners/tictactoe_logo.png": "12e77a39af8520f2b7021909042843ca",
"assets/assets/project_banners/univbuddy_banner_1.png": "9ac17cb56ab82923990999c04017d466",
"assets/assets/project_banners/univbuddy_banner_2.png": "56d26db4987a35dc00b1efcd1fc3f499",
"assets/assets/project_banners/univbuddy_logo.png": "e3133caf3ade919d8644fae5025ca5cd",
"assets/assets/project_banners/weather_banner_1.png": "4f824518dd942ddaf274c5cf1b2edd17",
"assets/assets/project_banners/weather_logo.png": "c9c52f11fa233ac5489fbc09aa1e60dd",
"assets/FontManifest.json": "158490315554d991fee4814a46477d3e",
"assets/fonts/MaterialIcons-Regular.otf": "04b115ae8666564645bb76d22fdc359c",
"assets/NOTICES": "d29c6e6485871f3ddb52cebfbe9fa770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2e372eb7eba278403c6be15037aa2760",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8c33d88d2c4e3d33b2d55f70e7d42f72",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e1fc99b069068b68201fd0ffa7830800",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4e6d8beb128fe1602e6acda6a5948270",
"icons/android-chrome-192x192.png": "bdf57ae41b971a7cdebbca36259718d2",
"icons/android-chrome-512x512.png": "d16aa23585ca56426b78a0f1696b951f",
"icons/apple-touch-icon.png": "0cb0ed0ca285ebcf15355f0366669bc2",
"icons/favicon-16x16.png": "1992b9e1d9163d93c781089d60bb3bcc",
"icons/favicon-32x32.png": "700ad3a124eb33ea824fb1a26e0f27be",
"icons/favicon.ico": "f6917e090fe652946fea85043de67e5e",
"index.html": "6ab5edc872a10677edbb1808508b4d04",
"/": "6ab5edc872a10677edbb1808508b4d04",
"logo.png": "47dbcb54438207aef8d6c61d7e9645ac",
"main.dart.js": "bdd2a8463a829773abb397f2c72c5231",
"manifest.json": "c4785037fe38992c0e8246a5b04132fe",
"version.json": "8b06583e92b6a18699cdda670ca83114"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
