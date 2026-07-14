const CACHE='neurocolor-vr-cielab17-v3';
const ASSETS=[
  './','./index.html','./vr_subtle_moving_protocol.html','./manifest.webmanifest',
  './assets/icon-180.png','./assets/icon-512.png','./assets/stimuli/baseline_grey.png',
  './assets/stimuli/01_Red.png','./assets/stimuli/02_Red-Orange.png','./assets/stimuli/03_Orange-Yellow.png','./assets/stimuli/04_Yellow.png','./assets/stimuli/05_Yellow-Green.png','./assets/stimuli/06_Green.png','./assets/stimuli/07_Green-Cyan.png','./assets/stimuli/08_Cyan_Blue-Green.png','./assets/stimuli/09_Cyan-Blue_Azure.png','./assets/stimuli/10_Blue.png','./assets/stimuli/11_Blue-Purple_Indigo.png','./assets/stimuli/12_Purple-Magenta.png','./assets/stimuli/13_Near-black.png','./assets/stimuli/14_Dark-grey.png','./assets/stimuli/15_Medium-grey.png','./assets/stimuli/16_Light-grey.png','./assets/stimuli/17_Near-white.png'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match('./index.html'))))});
