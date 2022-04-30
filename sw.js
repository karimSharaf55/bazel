const cacheName = "codeZone-v2";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/css/all.css",
    "/js/jquery-3.6.0.min.js",
    "/js/bootstrap.bundle.js",
]




self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets).then().catch()
        })
            .catch((erro) => { })
    )
    //  console.log("installed",installEvent);
})

self.addEventListener("activate", (activeteEvent) => {
    //    console.log("activate sw.js",activeteEvent);
    activeteEvent.waitUntil(

        caches.keys().then((keys) => {
            console.log(keys);
            return Promise.all(
                keys.filter((key) => key != cacheName)
                    .map((key) => caches.delete(key))
            )
        })
    )
})

self.addEventListener("fetch", (fetchEvent) => {
    // console.log("fetch",fetchEvent);

    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request).then((fetchres) => {
                return caches.open(cacheName).then((cache) => {
                    cache.put(fetchEvent.request, fetchres.clone())
                    return fetchres
                })
            })
        })
    )
})