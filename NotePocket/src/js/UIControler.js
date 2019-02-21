const noteBox = document.getElementById("noteBox");
const noteDelete = document.getElementById("deleteButton");
const notePin = document.getElementById("pinButton");
const addNewNote = document.getElementById("addNewNote");

export const addNote = noteContent => {
  const note = `<div class="column is-3-desktop is-4-tablet is-6-mobile">
    <div class="card has-background-warning" data-id="${noteContent.id}">
    <header class="card-header">
    <p class="card-header-title">${noteContent.title}</p>
    <span class="icon icon--rotate" id="pinButton">
    <i class="fas fa-thumbtack"></i>
    </span>
    <span class="icon" id="deleteButton">
    <i class="fas fa-times-circle "></i>
    </span>
    </header>
    <div class="card-content">
    <div class="content">${noteContent.description}</div>
    </div>
    <footer class="card-footer ">
    <span class="card__data  card-footer-item ">${noteContent.date}</span>
    </footer>
    </div>
    </div>`;

  noteBox.appendChild(note);
};

noteDelete.addEventListener('click',(e)=>{
e.preventDefault()
// let cos = e.target.dataset.id;
// console.log(cos)
    
})
pinDelete.addEventListener('click',(e)=>{
e.preventDefault();

})
addNewNote.addEventListener('click',(e)=>{
e.preventDefault();

})
