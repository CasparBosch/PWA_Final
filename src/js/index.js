// //indexedDB init
// const request = indexedDB.open("myDatabase", 1);

// //upgrade event
// request.onupgradeneeded = () => {
//   alert("upgrade needed");
// };

// //on success
// request.onsuccess = () => {
//   alert("success is called");
// };

// let db;

// const openRequest = indexedDB.open("myDatabase", 1);

// openRequest.onupgradeneeded = function (e) {
//   db = e.target.result;
//   console.log("running onupgradeneeded");
//   const storeOS = db.createObjectStore("myDatabaseStore", { keyPath: "name" });
// };
// openRequest.onsuccess = function (e) {
//   console.log("running onsuccess");
//   db = e.target.result;
// };
// openRequest.onerror = function (e) {
//   console.log("onerror! doesnt work");
// };

// // Fetch API
// fetch("https://cmgt.hr.nl/api/projects")
//   .then((response) => response.json())
//   .then((data) => {
//     const projectsContainer = document.getElementById("projectsContainer");

//     // Iterate over each project object
//     if (document.getElementById("projectsContainer")) {
//       data.data.forEach((project) => {
//         // Extract required information
//         const id = project.project.id; // Get the project ID
//         const title = project.project.title;
//         const tagline = project.project.tagline;
//         const headerImage = project.project.header_image;

//         // Create HTML linked elements
//         const projectElement = document.createElement("div");
//         projectElement.classList.add("p-3", "w-1/4");
//         projectElement.innerHTML = `
//         <a class="hover:opacity-80" href="detail.html?id=${id}">
//         <div class="rounded-md h-full bg-white shadow">
//             <div class="">
//                 <img src="${headerImage}" alt="${title}" class="w-full h-auto">
//             </div>
//             <div class="p-4">
//                 <h2 class="text-xl font-semibold">${title}</h2>
//                 <p class="text-sm">${tagline}</p>
//             </div>
//         </div>
//     </a>
//         `;

//         projectsContainer.appendChild(projectElement);
//       });
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// // Project Details
// // Get the project ID from the URL query parameters
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const projectId = urlParams.get("id");

// // Fetch project details based on the project ID
// fetch("https://cmgt.hr.nl/api/projects")
//   .then((response) => response.json())
//   .then((data) => {
//     // Find the project with the matching ID
//     const project = data.data.find((item) => item.project.id == projectId);
//     if (project) {
//       // Display the project details on the page
//       const detailsContainerElement =
//         document.getElementById("detailsContainer");
//       if (detailsContainerElement) {
//         // Extract project title and display it
//         const title = project.project.title;
//         const description = project.project.description;
//         detailsContainerElement.textContent = title;
//         detailsContainerElement.textContent = description;
//       }
//     } else {
//       console.error("Project not found.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching project details:", error);
//   });

// Service Worker
if ("serviceWorker" in navigator) {
  console.log("Service Worker is supported");

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./../../service-worker.js")
      .then((reg) => console.log("Service Worker: Registered"))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
