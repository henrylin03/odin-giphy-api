const API_KEY = "KNd6jJdzmPNQOSSRPCzCZPZnnxpSda56";
const img = document.querySelector("img");
const newGifBtn = document.querySelector(".new-gif");

getGIF();
newGifBtn.addEventListener("mousedown", getGIF);

function getGIF() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=dogs`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => (img.src = response.data.images.original.url));
}
