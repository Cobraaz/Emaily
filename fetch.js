function fetchAblums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then((res) => res.json())
    .then((json) => console.log(json));
}
fetchAblums();
//   console.log("res", res);
