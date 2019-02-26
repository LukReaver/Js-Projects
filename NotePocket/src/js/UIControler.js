export const DomElements ={
  noteBox: document.getElementById("noteBox"),
  addButton: document.getElementById("addNewNote"),
 delButton: document.getElementById("deleteButton"), 
}

// const noteDelete = document.getElementById("deleteButton");
// const notePin = document.getElementById("pinButton");
// const addNewNote = document.getElementById("addNewNote");

export const paintNotes = noteContent => {
  DomElements.noteBox.innerHTML = '';
  noteContent.forEach(el => {
    const note = `<div class="column is-3-desktop is-4-tablet is-6-mobile" id="${el.id}">
      <div class="card has-background-warning" >
      <header class="card-header">
      <p class="card-header-title">${el.title}</p>
      <span class="icon icon--rotate" id="pinButton">
      <i class="fas fa-thumbtack"></i>
      </span>
      <span class="icon" >
      <i class="fas fa-times-circle" id="deleteButton" data-id="${el.id}"></i>
      </span>
      </header>
      <div class="card-content">
      <div class="content">${el.description}</div>
      </div>
      <footer class="card-footer ">
      <span class="card__data  card-footer-item ">${el.date}</span>
      </footer>
      </div>
      </div>`;  
    DomElements.noteBox.innerHTML += note;    
  });
};

export function addListItem(notesList){
  paintNotes(notesList);
}
export function deleteListItem(idValue){
  const itemID = `#${idValue.id}`;
  const item = document.querySelector(itemID);
  item.remove();
}