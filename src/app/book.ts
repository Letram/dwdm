export class Book {
  id: number;
  title: string;
  category: string;
  numOfPages: number;
  isFavourite: Boolean;
  hasBeenRead: Boolean;
  readDate: Date;

  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}
