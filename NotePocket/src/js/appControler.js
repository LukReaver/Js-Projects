import * as ItemCtrl from './ItemControler'
import * as UiCtrl from './UIControler'


let noteList = ItemCtrl.getNoteList();

UiCtrl.DomElements.addButton.addEventListener("click", addItem);

document.body.addEventListener("click", function(evt) {
    // console.log(evt.target.id );
    if (evt.target.id === "deleteButton") {    
        deleteItem(evt);
    }
});

function addItem(e) {
    e.preventDefault();
   ItemCtrl.addNote();
  UiCtrl.addListItem(noteList);
}
function deleteItem(evt) {
    evt.preventDefault();
    const noteBox = evt.target.closest(`#${evt.target.dataset.id}`);
    ItemCtrl.deleteNoteListElement(noteBox);
    UiCtrl.deleteListItem(noteBox);
    
  // const note = evt.target.closest(`#${evt.target.dataset.id}`)
  //  note.parentNode.removeChild(note)

}