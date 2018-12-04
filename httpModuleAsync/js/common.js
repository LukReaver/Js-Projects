let $output = document.querySelector('.output')
let buttons = document.querySelector('.wrap')

const http = new httpModule();
let url = 'https://jsonplaceholder.typicode.com/users'

const formData = new FormData();

buttons.addEventListener('click', (e) => {

  let trg = e.target.textContent.toUpperCase()
  console.log(trg)

  if (trg === 'GET') {
    http.get(url)
      .then(resp => resp.json())
      .then(data => displayData(data))
      .catch(err => console.log("Błąd: ", err))
  } else if (trg === 'POST') {
    http.post(url, formData)
      .then(resp => resp.json())
      .then(data => displayData2(data))
      .catch(err => console.log("Błąd: ", err))
  } else if (trg === 'PUT') {
    http.put(url + '/2', formData)
      .then(resp => resp.json())
      .then(data => displayData2(data))
      .catch(err => console.log("Błąd: ", err))
  } else if (trg === 'DELETED') {
    http.delete(url + '/2')
      .then(data => displayData3(data))
      .catch(err => console.log("Błąd: ", err))
  }

})

function displayData(data) {
  let box = '';
  data.forEach((el, key) => {
    box += `
    <ul class="list-group">
    <li class="list-group-item">${data[key].name}</li>
    <li class="list-group-item">${data[key].username}</li>
    <li class="list-group-item">${data[key].email }</li>    
  </ul>         
    `
    $output.innerHTML = box
  });
}

function displayData2(data) {
  let box = `
      <ul class="list-group">
      <li class="list-group-item">Responce: User Number: ${data.id} </li>    
      </ul>   
      <ul class="list-group">
    <li class="list-group-item">Number more than 10 mean that user is added in the users list </li>
    <li class="list-group-item">Number 2 mean that user with id=2 is put/deleted in/from the list </li>
      </ul>   
      `
  console.log(data)
  $output.innerHTML = box
}

function displayData3(data) {
  let box = `
          <li>Id.2 - ${data} </li>       `
  console.log(data)
  $output.innerHTML = box
}