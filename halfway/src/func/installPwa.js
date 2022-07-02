// Script to suggest with a modal to install the PWA
// Language: javascript
// Path: src\func\installPwa.js

const suggestInstallPwa = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then(function (registration) {
        if (registration.installing) {
          console.log("SW installing");
        } else if (registration.waiting) {
          console.log("SW waiting");
        } else if (registration.active) {
          console.log("SW active");
        }
      })
      .catch(function (error) {
        console.log("Service Worker registration failed: ", error);
      });
  }
};
