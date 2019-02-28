export const DomElements ={
  notesBox: document.getElementById("noteBox"),
 openModal: document.getElementById("openNote"),
 closeModal: document.getElementById("closeModal"), 
 modal: document.getElementById("modalNewCard"), 
 //delButton: document.getElementById("deleteButton"), 
 modalNoteId: document.getElementById("modalNoteId"), 
 modalNoteTitle: document.getElementById("modalNoteTitle"), 
 modalNoteDescription: document.getElementById("modalNoteDescription"), 
 modalNoteColor: document.getElementById("modalNoteColor"), 
//----
//  noteTitle: document.getElementById("noteTitle"), 
//  noteDescription: document.getElementById("noteDescription"), 
//  noteColor: document.getElementById("noteColor"), 
 //-----
 addNewNote: document.getElementById("addNewNote"), 
}

// const noteDelete = document.getElementById("deleteButton");
// const notePin = document.getElementById("pinButton");
// const addNewNote = document.getElementById("addNewNote");

export const paintNotes = notesList => {
  DomElements.notesBox.innerHTML = '';
  notesList.forEach(el => {
    const note = `<div class="column is-3-desktop is-4-tablet is-6-mobile" id="${el.id}">
      <div class="card ${el.color}" >
      <header class="card-header">
      <p class="card-header-title" >${el.title}</p>
      <span class="icon icon--rotate" >
      <i class="fas fa-thumbtack" id="pinButton"></i>
      </span>
      <span class="icon" >
      <i class="fas fa-times-circle has-text-danger" id="deleteButton" data-id="${el.id}"></i>
      </span>
      </header>
      <div class="card-content">
      <div class="content" >${el.description}</div>
      </div>
      <footer class="card-footer ">
      <span class="card__data  card-footer-item " id="noteDate">${el.date}</span>
      </footer>
      </div>
      </div>`;  
    DomElements.notesBox.innerHTML += note;    
  });
};

export function addListItem(notesList){
  paintNotes(notesList);
  //targetElement.insertAdjacentElement(position, element);
}
export function deleteListItem(idValue){
  const itemID = `#${idValue.id}`;
  const item = document.querySelector(itemID);
  item.remove();
}
export function toggleModal(){
  DomElements.modal.classList.toggle('is-active')
  DomElements.addNewNote.textContent = 'Add';
  DomElements.modalNoteTitle.value = '' 
  DomElements.modalNoteDescription.value = ''
  DomElements.modalNoteColor.options[0].selected  = true;
}
export function getModalValues(){  
  return{
    id:DomElements.modalNoteId.value,
    title:DomElements.modalNoteTitle.value || 'Title',
    description:DomElements.modalNoteDescription.value || 'Description',
    color:DomElements.modalNoteColor.value,
  }
}
export function setModalValues(elem){  
   DomElements.modalNoteId.value = elem.id
   DomElements.modalNoteTitle.value = elem.title
   DomElements.modalNoteDescription.value = elem.description;
 switch(elem.color) {
      case 'has-background-warning':
      DomElements.modalNoteColor.options[0].selected = true;  
      break;
      case 'has-background-grey-lighter':
      DomElements.modalNoteColor.options[1].selected = true;  
      break;
      case 'has-background-success':
      DomElements.modalNoteColor.options[2].selected = true;
      break;
      case 'has-background-primary':
      DomElements.modalNoteColor.options[3].selected = true;  
      break;
      default:  
      DomElements.modalNoteColor.options[0].selected = true;    
  }  
}
