const API_KEY = "KNd6jJdzmPNQOSSRPCzCZPZnnxpSda56";
const img = document.querySelector("img");
const newGifBtn = document.querySelector(".new-gif");
const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector("#search-btn");

getGIF();
newGifBtn.addEventListener("mousedown", getGIF);
searchBtn.addEventListener("mousedown", getGIF);

// functions
function getGIF() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchbar.value}`,
    {
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .then((response) => (img.src = response.data.images.original.url));
}
