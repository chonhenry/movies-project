// console.log(window.temp);

const params = new URLSearchParams(window.location.search);

console.log(`Title: ${params.get("title")}`);

// fetch(`http://www.omdbapi.com/?apikey=cbfe887d&t=${params.get("title")}!`)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });
