const api = "gJK3UQuVGIl1m6tMqTcEcGcqZDW3L3gB";
const btn = document.querySelector("#btnSearch");
const gif = document.querySelector("#gifSearch");
const num = document.querySelector("#numSearch");
let search;
let number;
let URL;
function showGif() {
  search = gif.value;
  number = num.value;
  if (search === "") {
    alert("input what are you looking for");
  } else {
    URL = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}&limit=${number}`;
    document.querySelector("div").innerHTML = "";
    fetch(URL)
      .then((response) => response.json())
      .then((result) =>
        result.data.map((e) => {
          const fig = document.createElement("figure");
          const img = document.createElement("img");
          img.src = e.images.downsized.url;
          fig.appendChild(img);
          document.querySelector("div").appendChild(fig);
        })
      );
  }
}
btn.addEventListener("click", () => {
  showGif();
});
num.addEventListener("input", () => {
  showGif();
});
