class Card {
  constructor(title, desc, color) {
      this.id = null;
    this.title = title;
    this.description = desc;
    this.color = color;
    this.data = new Date();
    this.isPined = false;
  }
}

const data = {
  casualNotes: [],
  pinedNotes: [],
  currentItem: null,
};

export const addItem = () =>{

    const id  = data.casualNotes.length;
    const item = new Card(id,'dupy','contain 2 posladki', 'white')
    data.casualNotes.push(item)
}
