import * as ItemCtrl from "./ItemControler";
import * as UiCtrl from "./UIControler";

let noteList = ItemCtrl.getNoteList();

// UiCtrl.DomElements.addButton.addEventListener("click", addItem);
UiCtrl.DomElements.openModal.addEventListener("click", UiCtrl.toggleModal);
UiCtrl.DomElements.closeModal.addEventListener("click", UiCtrl.toggleModal);
UiCtrl.DomElements.addNewNote.addEventListener("click", addORUpdateItem);

// Dynamic add addEventListener  in nodeElement
document.body.addEventListener("click", function(evt) { 
  if (evt.target.id === "deleteButton") {
    deleteItem(evt);
  }
  else if (evt.target.id === "pinButton") {
   // deleteItem(evt);
  } else if (evt.target.closest(".card")) {
    // updateItem(evt.target.closest(".card"));
    updateItem(evt.target.closest(".column").id);
  }
});

// Init update item
function updateItem(elemID) {
  const notesListItem = ItemCtrl.getListItem(elemID);
  UiCtrl.toggleModal();
  UiCtrl.DomElements.addNewNote.textContent = "Update";
  UiCtrl.setModalValues(notesListItem);
  // finish in addORUpdateItem()
}

function addORUpdateItem(e) {
  e.preventDefault();
  // Checking method type
  const method = UiCtrl.DomElements.addNewNote.textContent;
  // If method is 'Add', add item into list.
  if (method === "Add") {
    console.log("add");
    const noteContent = UiCtrl.getModalValues();
    ItemCtrl.addNote(noteContent);
    UiCtrl.addListItem(noteList);
    UiCtrl.toggleModal();
  // If method is 'Update',update list item.
  } else if (method === "Update") {
    console.log("update");
    const noteContent = UiCtrl.getModalValues();
    ItemCtrl.updateListItem(noteContent);
    UiCtrl.addListItem(noteList);
    UiCtrl.toggleModal();   
  }
}

function deleteItem(evt) {
  evt.preventDefault();
  const noteBox = evt.target.closest(`#${evt.target.dataset.id}`);
  ItemCtrl.deleteListItem(noteBox);
  UiCtrl.deleteListItem(noteBox);
  // const note = evt.target.closest(`#${evt.target.dataset.id}`)
  //  note.parentNode.removeChild(note)
}
function pinItem(evt) {
  evt.preventDefault();
  const noteBox = evt.target.closest(`#${evt.target.dataset.id}`);
  //ItemCtrl.deleteListItem(noteBox);
 // UiCtrl.deleteListItem(noteBox);
  // const note = evt.target.closest(`#${evt.target.dataset.id}`)
  //  note.parentNode.removeChild(note)
}
