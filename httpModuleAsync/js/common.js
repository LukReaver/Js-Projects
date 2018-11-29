let $output = document.querySelector('.output')

const http = new httpModule();
let url = 'https://jsonplaceholder.typicode.com/users'

const formData = new FormData();

http.get(url)
  .then(resp => resp.json())
  .then(data => displayData(data))
  .catch(err => console.dir("Błąd: ", err))

http.post(url, formData)
  .then(data => console.log(data))
  .catch(err => console.dir("Błąd: ", err))

http.put(url + '/2', formData)
  .then(data => console.log(data))
  .catch(err => console.dir("Błąd: ", err))

http.delete(url + '/2')
  .then(data => console.log(data))
  .catch(err => console.dir("Błąd: ", err))


function displayData(data) {
  let box = '';
  data.forEach((el, key) => {
    box += `
  <ul>
    <li>Name: ${data[key].name} </li>
    <li>UserName: ${data[key].username} </li>
    <li>Email: ${data[key].email } </li>
    </ul>      
    `
    $output.innerHTML = box
  });
}