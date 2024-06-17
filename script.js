const API_KEY = "KNd6jJdzmPNQOSSRPCzCZPZnnxpSda56";
const img = document.querySelector("img");
const btn = document.querySelector(".new-gif");

getGIF();
btn.addEventListener("mousedown", getGIF);

function getGIF() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=coding`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
