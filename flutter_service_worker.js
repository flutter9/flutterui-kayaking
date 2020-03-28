'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/kayak.png": "4ef5a5e6a6adbe2ad11ec00f8ebd1519",
"/assets/assets/steak.jpg": "4fc4f76165e451d9c86cd3043038ce14",
"/assets/assets/model.jpg": "0c75e880f4f37708b4c99d715b9e5c14",
"/assets/assets/norway6.jpeg": "0dee118d5e39c2a4665b95f7ff98a00b",
"/assets/assets/norway3.jpeg": "492264485b0f877d4100c572469bc7c6",
"/assets/assets/norway4.jpeg": "aa5079c07f5b9aedc50077ad4396fd5e",
"/assets/assets/norway5.jpeg": "93b86b2baebf217892b49c5807e6c90b",
"/assets/assets/rosemary.png": "77189a152d8f7de6a5b662e2bc2b3299",
"/assets/assets/norway1.jpg": "242462f0ae2b0b72678b159c8896d60a",
"/assets/assets/norway7.jpeg": "614cfecf8cc6a492d8cb7fc85f2b00f1",
"/assets/assets/kayak2.png": "8785e14c0e37639222bb7286bdca7c6e",
"/assets/assets/norway2.jpg": "3ad30529b10e5e2803e2976b41ef21f1",
"/assets/assets/fonts/Inconsolata-Regular.ttf": "9d52a8c4fafc763d9a356d8b67d4a2e6",
"/assets/FontManifest.json": "efe259b8fa9bc498e6413994e86ebc1e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "717b602e2df2fb73523916235427b9d1",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "0e7dbfe010556596dd6dfd2b6ea859d0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
