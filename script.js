fetch("http://www.omdbapi.com/?apikey=cbfe887d&t=Wonder Woman 1984")
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
