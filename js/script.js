// let movie = document.getElementsByClassName("poster")[0];

// movie.addEventListener("click", () => {
//   console.log("clicked");
//   let newWindow = window.open("./movie.html" + "?title=scoob!");
//   newWindow.temp = "scoob!";
// });

document.getElementById("btn-left").addEventListener("click", () => {
  let slider1 = document.getElementById("movie-slider-1");
  let slider2 = document.getElementById("movie-slider-2");

  if (slider1.classList.contains("moved-left")) {
    slider1.classList.add("middle");
    slider1.classList.remove("moved-left");

    slider2.classList.add("moved-right");
    slider2.classList.remove("middle");
  }
});

document.getElementById("btn-right").addEventListener("click", () => {
  let slider1 = document.getElementById("movie-slider-1");
  let slider2 = document.getElementById("movie-slider-2");

  if (!slider1.classList.contains("moved-left")) {
    slider1.classList.add("moved-left");
    slider1.classList.remove("moved-right");

    slider2.classList.add("middle");
    slider2.classList.remove("moved-right");
  }
});
