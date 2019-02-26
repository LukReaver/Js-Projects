export const DomElements ={
  notesBox: document.getElementById("noteBox"),
 openModal: document.getElementById("openNote"),
 closeModal: document.getElementById("closeModal"), 
 modal: document.getElementById("modalNewCard"), 
 //delButton: document.getElementById("deleteButton"), 
 noteTitle: document.getElementById("noteTitle"), 
 noteDescription: document.getElementById("noteDescription"), 
 noteColor: document.getElementById("noteColor"), 
 //-----
 addNewNote: document.getElementById("addNewNote"), 
}

// const noteDelete = document.getElementById("deleteButton");
// const notePin = document.getElementById("pinButton");
// const addNewNote = document.getElementById("addNewNote");

export const paintNotes = noteContent => {
  DomElements.notesBox.innerHTML = '';
  noteContent.forEach(el => {
    const note = `<div class="column is-3-desktop is-4-tablet is-6-mobile" id="${el.id}">
      <div class="card ${el.color}" >
      <header class="card-header">
      <p class="card-header-title">${el.title}</p>
      <span class="icon icon--rotate" id="pinButton">
      <i class="fas fa-thumbtack"></i>
      </span>
      <span class="icon" >
      <i class="fas fa-times-circle has-text-danger" id="deleteButton" data-id="${el.id}"></i>
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
    DomElements.notesBox.innerHTML += note;    
  });
};

export function addListItem(notesList){
  paintNotes(notesList);
}
export function toggleModal(){
  DomElements.modal.classList.toggle('is-active')
  DomElements.noteTitle.value = ''
  DomElements.noteDescription.value = ''
  DomElements.noteColor.options[0].selected  = true;
}
export function ModalValues(){  
  return{
    title:DomElements.noteTitle.value,
    description:DomElements.noteDescription.value,
    color:DomElements.noteColor.value,
  }
 // console.log(cos)
}
export function deleteListItem(idValue){
  const itemID = `#${idValue.id}`;
  const item = document.querySelector(itemID);
  item.remove();
}
