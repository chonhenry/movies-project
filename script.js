// fetch("http://www.omdbapi.com/?apikey=cbfe887d&t=Wonder Woman 1984")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// Title: "Wonder Woman 1984"
// Year: "2020"
// Rated: "N/A"
// Released: "05 Jun 2020"
// Runtime: "N/A"
// Genre: "Action, Adventure, Fantasy"
// Director: "Patty Jenkins"
// Writer: "Geoff Johns (story), Patty Jenkins (story), Dave Callaham (screenplay), Geoff Johns (screenplay), Patty Jenkins (screenplay), William Moulton Marston (Wonder Woman created by)"
// Actors: "Pedro Pascal, Gal Gadot, Kristen Wiig, Chris Pine"
// Plot: "Plot unknown. A sequel to the 2017 superhero film 'Wonder Woman.'"
// Language: "English"
// Country: "USA, UK, Canada, Mexico, Spain"
// Awards: "N/A"
// Poster: "https://m.media-amazon.com/images/M/MV5BYzAyOGJkMzUtMmRjYS00NGJmLWExNGEtYzI2YjVmMmQzMzFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
// Ratings: []
// Metascore: "N/A"
// imdbRating: "N/A"
// imdbVotes: "N/A"
// imdbID: "tt7126948"
// Type: "movie"
// DVD: "N/A"
// BoxOffice: "N/A"
// Production: "Warner Bros. Pictures"
// Website: "N/A"
// Response: "True"

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
