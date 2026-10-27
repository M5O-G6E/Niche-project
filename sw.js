// Service worker minimal de N!che : rend l'appli installable sur Android.
// Il ne met rien en cache : chaque ouverture charge toujours la dernière version publiée.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
