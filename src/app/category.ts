export class Category {
  id: number;
  name: string;
  bookNum: number;

  constructor(values: Object = {}){
    Object.assign(this,values);
  }
}
