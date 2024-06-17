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
  const img = new Image();

  errorMessage.textContent = "";
  gifContainer.replaceChildren();

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}`,
    {
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .then((response) => {
      const responseData = response.data;

      if (Array.isArray(responseData) && responseData.length === 0) {
        errorMessage.textContent = "Sorry, no results found.";
        console.error("No results found for search");
        return;
      }
      img.src = responseData.images.original.url;
      gifContainer.appendChild(img);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with fetching from GIPHY:",
        error
      );
    });
}
