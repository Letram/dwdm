export class Book {
  id: number;
  title: string;
  categories: string[];
  numOfPages: number;
  isFavourite: Boolean;
  hasBeenRead: Boolean;
  readDate: Date;

  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}
