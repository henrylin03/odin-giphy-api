const gifContainer = document.querySelector(".gif-container");
const newGifBtn = document.querySelector(".new-gif");
const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector("#search-btn");
const errorMessage = document.querySelector(".error-message");

const API_KEY = "KNd6jJdzmPNQOSSRPCzCZPZnnxpSda56";

let search = searchbar.value;

getGIF();
searchbar.addEventListener("input", (e) => (search = e.target.value));
newGifBtn.addEventListener("mousedown", getGIF);
searchBtn.addEventListener("mousedown", getGIF);

// functions
async function getGIF() {
  errorMessage.textContent = "";
  gifContainer.replaceChildren();

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}`,
      {
        mode: "cors",
      }
    );
    const gifData = await response.json();
    if (Array.isArray(gifData.data) && gifData.data.length === 0) {
      errorMessage.textContent = "Sorry, no results found.";
      console.error("No results found for search");
      return;
    }
    const img = new Image();
    img.src = gifData.data.images.original.url;
    gifContainer.appendChild(img);
  } catch (error) {
    console.error("There has been a problem with fetching from GIPHY:", error);
  }
}
