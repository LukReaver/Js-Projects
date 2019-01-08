const $jokes = document.getElementById("jokes");

export function getJoke() {
  const url = "https://api.icndb.com/jokes/random/2";
  fetch(url)
    .then(res => res.json())
    .then(res => ($jokes.textContent = res.value[0].joke))
    .catch(err=>console.log(err))
}
