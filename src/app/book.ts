export class Book {
  id: string;
  title: string;
  categories: string[];
  numOfPages: number;
  isFavourite: Boolean = false;
  hasBeenRead: Boolean = false;
  readDate: Date = null;

  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}
