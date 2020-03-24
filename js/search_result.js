const params = new URLSearchParams(window.location.search);
let btn = document.getElementById("btn");
let search_title = document.getElementById("search-title");
let search_section = document.getElementById("search-section");
let search_result = document.getElementById("search-result");

search_title.innerText = params.get("title");

// fetch the movie api
fetch(`http://www.omdbapi.com/?apikey=cbfe887d&s=` + params.get("title"))
  .then(response => {
    return response.json();
  })
  .then(data => {
    if (data["Response"] === "False") {
      //   search_item.remove();
    } else {
      let movie_list = data["Search"];
      let new_search_item;

      search_result.remove();
      console.log(movie_list);

      movie_list.forEach(element => {
        new_search_item = document.createElement("div");
        new_search_item.classList.add("search-item");

        new_search_item.innerHTML = `
        <img src=${element["Poster"]} alt="poster" class="poster"/>
        <div class="search-info">
        <h1 class="search-info-title" id=${element["imdbID"]}>${element["Title"]}</h1>
        <div class="search-info-detail">
          <div class="search-release-date">
            <h4>Release Date</h4>
            <p>${element["Year"]}</p>
          </div>
        </div>
      </div>
        `;
        search_section.appendChild(new_search_item);
      });

      let result_title = document.getElementsByClassName("search-info-title");

      for (let i = 0; i < result_title.length; i++) {
        console.log(result_title[i].innerText);
        result_title[i].addEventListener("click", () => {
          console.log(result_title[i].innerText);
          window.open("./movie.html" + `?id=${result_title[i].id}`);
        });
      }
    }
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
