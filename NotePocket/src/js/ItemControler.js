
// Class note
class Card {
  constructor(id, title, desc, color) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.color = color;
    this.date = new Date().toLocaleDateString();
    this.isPined = false;
  }
}

 // Data Structure / State
const data = {
  casualNotes: [],
//  currentItem: null,
  notesAmount: 0
};

// Add note in to array
export const addNote = noteContent => {
  let { title, description, color } = noteContent;
  const noteId = `item-${data.notesAmount}`;
  switch (color) {
    case "Yellow":
      color = "has-background-warning";
      break;
    case "Gray":
      color = "has-background-grey-lighter";
      break;
    case "Blue":
      color = "has-background-primary";
      break;
    case "Green":
      color = "has-background-success";
      break;
    default:
      color = "has-background-warning";
  }
  const item = new Card(noteId, title, description, color);
  data.casualNotes.push(item);
  console.log(item);  
  data.notesAmount++;
};

// Update item into array
export const updateListItem = noteElem => {
  console.log(noteElem);
  data.casualNotes.forEach(el => {
    if (el.id == noteElem.id) {
      el.title = noteElem.title;
      el.description = noteElem.description;
      switch (noteElem.color) {
        case "Yellow":
          el.color = "has-background-warning";
          break;
        case "Gray":
          el.color = "has-background-grey-lighter";
          break;
        case "Blue":
          el.color = "has-background-primary";
          break;
        case "Green":
          el.color = "has-background-success";
          break;
        default:
          el.color = "has-background-warning";
      }
      el.date = new Date().toLocaleDateString();     
    }
  });
};

// Get item from array
export const getListItem = noteID => {
  var result = data.casualNotes.filter(obj => {
    return obj.id === noteID;
  });
  return result[0];
};
//get notes array
export const getNoteList = () => {
  return data.casualNotes;
};
//Delete item array
export const deleteListItem = passElem => {
  console.log(passElem);

  data.casualNotes.forEach((el, key) => {
    if (el.id === passElem.id) {
      data.casualNotes.splice(key, 1);    
    }
  });
};

// move item on front of array 
export const pinListItem = elemID => {
  data.casualNotes.forEach(el => {
    if (el.id === elemID.id) {
      el.isPined = !el.isPined;    
    }
  });
  
  let pinedList = data.casualNotes.filter((el)=>{
    return el.isPined === true;
  })
  let unPinedList = data.casualNotes.filter((el)=>{
    return el.isPined != true;
  })
  data.casualNotes = pinedList.concat(unPinedList);  

};
