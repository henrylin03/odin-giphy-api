const API_KEY = "KNd6jJdzmPNQOSSRPCzCZPZnnxpSda56";
const img = document.querySelector("img");

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=coding`, {
  mode: "cors",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
