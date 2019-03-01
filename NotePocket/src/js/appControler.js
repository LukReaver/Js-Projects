
// Modules import
import * as ItemCtrl from "./ItemControler";
import * as UiCtrl from "./UIControler";

// Add event listeners
UiCtrl.DomElements.openModal.addEventListener("click", UiCtrl.toggleModal);
UiCtrl.DomElements.closeModal.addEventListener("click", UiCtrl.toggleModal);
UiCtrl.DomElements.addNewNote.addEventListener("click", addORUpdateItem);
UiCtrl.DomElements.resetModalNote.addEventListener("click", resetNote);

// Dynamic add addEventListener  in nodeElement
document.body.addEventListener("click", function(evt) {
  if (evt.target.id === "deleteButton") {
    deleteItem(evt);
  } else if (evt.target.id === "pinButton") {
    // console.log("PINN");
    pinItem(evt);
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

//Add or Update note
function addORUpdateItem(e) {
  e.preventDefault();
  const noteList = ItemCtrl.getNoteList();
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

// Delete note
function deleteItem(evt) {
  evt.preventDefault();
  const noteBox = evt.target.closest(`#${evt.target.dataset.id}`);
  ItemCtrl.deleteListItem(noteBox);
  UiCtrl.deleteListItem(noteBox);  
}

// Reset Modal values
function resetNote() {  
  UiCtrl.resetModal(); 
}

// Add note into front of list
function pinItem(evt) {
  const cardID = evt.target.closest(`#${evt.target.dataset.id}`);
  //const cardPin = evt.target.parentElement;
  ItemCtrl.pinListItem(cardID);
 // UiCtrl.pinListItem(cardPin);
  const noteList = ItemCtrl.getNoteList();
  UiCtrl.addListItem(noteList);
}
