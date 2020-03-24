// let movie = document.getElementsByClassName("poster")[0];

// move slider
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

// add click event listner to each movie
let movie = document.querySelectorAll(".movie-title");
let movie_poster = document.querySelectorAll(".movie-poster");

movie.forEach(element => {
  element.addEventListener("click", () => {
    // console.log(element.innerText);
    window.open("./movie.html" + `?id=${element.classList[1]}`);
    // newWindow.temp = "scoob!";
  });
});

movie_poster.forEach(element => {
  element.addEventListener("click", () => {
    // console.log(element.classList[1]);
    window.open("./movie.html" + `?id=${element.classList[1]}`);
  });
});

// Search Bar
let search_logo = document.getElementById("search-logo");
let search_value = document.getElementById("search-input");

search_logo.addEventListener("click", () => {
  console.log(search_value.value);
  window.open("./search_result.html" + `?title=${search_value.value}`);
});

search_value.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    window.open("./search_result.html" + `?title=${search_value.value}`);
  }
});
