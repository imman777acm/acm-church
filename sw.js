const CACHE="acm-church-v2";
const ASSETS=["./","./index.html","./style.css","./manifest.webmanifest","./assets/logo.png","./assets/church.jpg","./assets/pastor.jpg","./assets/icon-192.png","./assets/icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
