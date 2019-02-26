class Card {
  constructor(id,title, desc, color) {
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
  notesAmount:0,
};

export const addNote = (noteContent) => {
  let {title,description,color} = noteContent;
  const noteId = `item-${data.notesAmount}`;
  switch(color) {
    case 'Yellow':
    color = 'has-background-warning'
    break;
    case 'Gray':
    color = 'has-background-grey-lighter'
    break;
    case 'Blue':
    color = 'has-background-primary'
    break;
    case 'Green':
    color = 'has-background-success'
    break;
    default:  
    color = 'has-background-warning'
  } 
  const item = new Card(noteId, title, description,color);
  data.casualNotes.push(item);
 //console.log(item);
 // console.log(data.casualNotes);
  data.notesAmount++;
};

export const getNoteList = () => {
  return data.casualNotes;
};
export const deleteNoteListElement = passElem => {
  console.log(passElem);

  // console.log(Object.values(data.casualNotes));
  // for (var key in  data.casualNotes) {
  //   var obj =  data.casualNotes[key];
  //   console.log(obj.id);
  // }

  data.casualNotes.forEach((el, key) => {
    if (el.id === passElem.id) {
      data.casualNotes.splice(key, 1);
      console.log(data.casualNotes);
    }
  });
};
