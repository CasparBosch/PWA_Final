// const localforage = require("localforage");

importScripts("./src/js/localforage.min.js");

const cacheName = "v1";

// // Index of Pages
// const cacheAssets = [
//     'index.html',
//     // CSS
//     '/src/css/input.css',
//     '/src/css/output.css',
//     // JS
//     '/src/js/index.js'
// ]

// Call Install Event
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");

  // // Cache Content of Indexed Pages
  // event.waitUntil(
  //     caches
  //         .open(cacheName)
  //         .then(cache => {
  //             console.log('Service Worker: Caching Files');
  //             cache.addAll(cacheAssets);
  //         })
  //         .then(() => self.skipWaiting())
  // );
});

// Call Activate Event
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");

  // Remove Unwanted Caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Working: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
// self.addEventListener("fetch", (event) => {
//   console.log("Service Working: Fetching");

// console.log(localforage.indexedDB.createInstance());

// const requestClone = event.request.clone();

//   event.respondWith(
//     // Fetch for Indexed Pages
//     // fetch(event.request).catch(() => caches.match(event.request));

//     // Fetch for Full Site
//     fetch(requestClone)
//       .then((res) => {
//         //clone response
//         const responseClone = res.clone();

//         //Tags
//         if (event.request.url.includes("https://cmgt.hr.nl/api/tags")) {
//           cache.open(cacheName).then((cache) => {
//             cache.put(requestClone, responseClone);
//           });
//         }

//         //index
//         if (event.request.url.includes("https://cmgt.hr.nl/api/projects")) {
//           cache.open(cacheName).then((cache) => {
//             cache.put(requestClone, responseClone);
//           });
//         }

//         // // Make copy/clone of respone
//         // const resClone = res.clone();
//         // // Open cache
//         // caches
//         //     .open(cacheName)
//         //     .then(cache => {
//         //         // Add response to cache
//         //         cache.put(event.request, resClone);
//         //     });
//         return res;
//       })
//       .catch((error) => {
//         console.log(cache)
//         return caches
//           .match(requestClone)
//           .then((res) => res || Promise.reject("no-match"));
//       })
//   );
// });

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");

  // Initialize localforage instance
  const localforageInstance = localforage.createInstance();

  // Check if the request URL includes the specified endpoint
  if (event.request.url.includes("https://cmgt.hr.nl/api/tags")) {
    // Intercept the request and respond accordingly
    event.respondWith(
      fetch(event.request) // Fetch the request
        .then((response) => {
          // Log the response
          console.log("Response:", response);
          return response; // Return the response
        })
        .catch((error) => {
          // Log any errors
          console.error("Error fetching data:", error);
          // Respond with an error message or fallback response
          return new Response("An error occurred while fetching data.", {
            status: 500,
          });
        })
    );
  } else if (event.request.url.includes("https://cmgt.hr.nl/api/projects")) {
    // Intercept the request and respond accordingly
    event.respondWith(
      fetch(event.request) // Fetch the request
        .then((response) => {
          // Log the response
          console.log("Response:", response);
          return response; // Return the response
        })
        .catch((error) => {
          // Log any errors
          console.error("Error fetching data:", error);
          // Respond with an error message or fallback response
          return new Response("An error occurred while fetching data.", {
            status: 500,
          });
        })
    );
  }
});
