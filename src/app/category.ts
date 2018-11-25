export class Category {
  id: string;
  name: string;
  bookNum: number;

  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}
