// Script for push notification
navigator.serviceWorker.ready.then(function (registration) {
  registration.pushManager.getSubscription().then(function (subscription) {
    if (subscription) {
      console.log("User is subscribed.");
    } else {
      console.log("User is not subscribed.");
    }
  });
});
// Script to send push notification to the user when he/she is in the vicinity of the store
// TODO - Add the script to send push notification to the user when he/she is in the vicinity of the store
