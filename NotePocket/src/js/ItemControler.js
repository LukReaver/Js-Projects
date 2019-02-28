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

const data = {
  casualNotes: [],
  pinedNotes: [],
  currentItem: null,
  notesAmount: 0
};

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
  // console.log(data.casualNotes);
  data.notesAmount++;
};

export const updateListItem = noteElem => {
  console.log(noteElem);
  data.casualNotes.forEach(el => {
    if (el.id == noteElem.id) {
      el.title = noteElem.title;
      el.description = noteElem.description;  
      switch (noteElem.color) {
        case "Yellow":
        el.color =  "has-background-warning";
          break;
        case "Gray":
        el.color =  "has-background-grey-lighter";
          break;
        case "Blue":
        el.color =  "has-background-primary";
          break;
        case "Green":
        el.color =  "has-background-success";
          break;
        default:
        el.color =  "has-background-warning";
      }      
      el.date = new Date().toLocaleDateString();      
      //console.log(el);
    }
  });
};
export const getListItem = noteID => {
  // data.casualNotes.find(el => {
  //       console.log(el);
  //   return el.id == noteID.id

  // });
  // var result = data.casualNotes.forEach((el) => {
  //   if(el.id == noteID.id){
  //           console.log(el);
  //     return el;
  //   }
  // });
  var result = data.casualNotes.filter(obj => {   
    return obj.id === noteID;
  });
  return result[0];
};

export const getNoteList = () => {
  return data.casualNotes;
};
export const deleteListItem = passElem => {
  console.log(passElem);

  data.casualNotes.forEach((el, key) => {
    if (el.id === passElem.id) {
      data.casualNotes.splice(key, 1);
      //console.log(data.casualNotes);
    }
  });
};
export const pinListItem = passElem => {
  console.log(passElem);
  let = cos;
  data.casualNotes.forEach((el, key) => {
    if (el.id === passElem.id) {
      cos = data.casualNotes.pop(key);
      console.log("PIN"+cos);
    }
  });
};
