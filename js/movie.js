// console.log(window.temp);

const params = new URLSearchParams(window.location.search);

// DOM object
let big_title = document.getElementById("title");
let span_title = document.getElementById("span-title");
let movie_details_title = document.getElementById("movie-details-title");
let movie_details_genre = document.getElementById("movie-details-genre");
let movie_details_cast = document.getElementById("movie-details-cast");
let movie_details_director = document.getElementById("movie-details-director");
let movie_details_production = document.getElementById(
  "movie-details-production"
);
let movie_details_age = document.getElementById("movie-details-age");
let release_date = document.getElementById("release-date");
let running_time = document.getElementById("running-time");
let movie_intro = document.getElementById("intro");
let movie_poster = document.getElementById("movie-poster-img");

// fetch the movie api
fetch(`http://www.omdbapi.com/?apikey=cbfe887d&i=` + params.get("id"))
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    big_title.innerText = data["Title"];
    span_title.innerText = data["Title"];
    movie_details_title.innerText = data["Title"];
    movie_details_genre.innerText = data["Genre"];
    movie_details_cast.innerText = data["Actors"];
    movie_details_director.innerText = data["Director"];
    movie_details_production.innerText = data["Production"];
    movie_details_age.innerText = data["Rated"];
    release_date.innerText = data["Released"];
    running_time.innerText = data["Runtime"];
    movie_intro.innerText = data["Plot"];
    movie_poster.src = data["Poster"];
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
// Title: "Wonder Woman 1984";
// Rated: "N/A";
// Released: "05 Jun 2020";
// Runtime: "N/A";
// Genre: "Action, Adventure, Fantasy";
// Director: "Patty Jenkins";
// Actors: "Pedro Pascal, Gal Gadot, Kristen Wiig, Chris Pine";
// Plot: "Plot unknown. A sequel to the 2017 superhero film 'Wonder Woman.'";
// Language: "English";
// Country: "USA, UK, Canada, Mexico, Spain";
// Poster: "https://m.media-amazon.com/images/M/MV5BYzAyOGJkMzUtMmRjYS00NGJmLWExNGEtYzI2YjVmMmQzMzFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg";
// imdbID: "tt7126948";
// Type: "movie";
// DVD: "N/A";
// Production: "Warner Bros. Pictures";
// Rated:
