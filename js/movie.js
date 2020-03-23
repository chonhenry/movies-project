// console.log(window.temp);

const params = new URLSearchParams(window.location.search);

console.log(`Title: ${params.get("title")}`);

const title = params.get("title").replace("%", " ");
let genre, cast, director, production, age;

// DOM object
let movie_details_title = document.getElementById("movie-details-title");
let movie_details_genre = document.getElementById("movie-details-genre");
let movie_details_cast = document.getElementById("movie-details-cast");
let movie_details_director = document.getElementById("movie-details-director");
let movie_details_production = document.getElementById(
  "movie-details-production"
);
let movie_details_age = document.getElementById("movie-details-age");

fetch(`http://www.omdbapi.com/?apikey=cbfe887d&t=` + title)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    genre = data["Genre"];
    cast = data["Actors"];
    director = data["Director"];
    production = data["Production"];
    age = data["Rated"];

    movie_details_title.innerText = title;
    movie_details_genre.innerText = genre;
    movie_details_cast.innerText = cast;
    movie_details_director.innerText = director;
    movie_details_production.innerText = production;
    movie_details_age.innerText = age;
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
