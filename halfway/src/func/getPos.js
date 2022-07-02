// function to get user latitude and longitude, return both of them
export const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      return {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
