const gifContainer = document.querySelector(".gif-container");
const newGifBtn = document.querySelector(".new-gif");
const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector("#search-btn");

const API_KEY = "KNd6jJdzmPNQOSSRPCzCZPZnnxpSda56";

let search = searchbar.value;

getGIF();
searchbar.addEventListener("input", (e) => (search = e.target.value));
newGifBtn.addEventListener("mousedown", getGIF);
searchBtn.addEventListener("mousedown", getGIF);

// functions
function getGIF() {
  const img = new Image();

  gifContainer.replaceChildren();

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}`,
    {
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .then((response) => (img.src = response.data.images.original.url))
    .catch((error) => {
      console.error(
        "There has been a problem with fetching from GIPHY:",
        error
      );
    });

  gifContainer.appendChild(img);
}
