import { Injectable } from '@angular/core';
import {Book} from "../book";
import {Category} from "../category";

@Injectable({
  providedIn: 'root'
})
export class BooklistDataService {

  nextId: number = 3;
  books: Book[] = [
                    new Book({id: 0, title: "Book 0", categories: ["Poetry"], numOfPages: 100, isFavourite: false, hasBeenRead: false, readDate: null}),
                    new Book({id: 1, title: "Book 1", categories: ["Drama"], numOfPages: 50, isFavourite: false, hasBeenRead: false, readDate: null}),
                    new Book({id: 2, title: "Book 2", categories: ["Science-Fiction"], numOfPages: 200, isFavourite: false, hasBeenRead: false, readDate: null})
                  ];
  categories: string[] = ["Kids", "Comic", "Drama", "Poetry", "Science-Fiction", "Thriller", "Fantasy"];
  formattedCategories: Category[] = [
    new Category({id: 0, name: "Kids", bookNum: 0}),
    new Category({id: 1, name: "Comic", bookNum: 0}),
    new Category({id: 2, name: "Drama", bookNum: 1}),
    new Category({id: 3, name: "Poetry", bookNum: 1}),
    new Category({id: 4, name: "Science-Fiction", bookNum: 1}),
    new Category({id: 5, name: "Thriller", bookNum: 0}),
    new Category({id: 6, name: "Fantasy", bookNum: 0})
  ];
  totalCategoryCount: number = 3;
  constructor() { }

  getCategories():string[]{
    return this.categories;
  }
  getBooks():Book[]{
    return this.books;
  }
  getFormattedCategories():Category[]{
    return this.formattedCategories;
  }
  getTotalCategoryCount():number {
    return this.totalCategoryCount;
  }
  addBookData(book: Book): BooklistDataService{
    console.log(this.books);
    //book.id = this.nextId++;
    this.books.push(book);
    this.updateFormattedCategoryCount(book.categories, "increment");
    return this;
  }

  //TODO same goes for delete method, i haven't implemented it yet
  private updateFormattedCategoryCount(categories: string[], operation: string) {
    for (let i = 0; i < categories.length; i++) {
      this.formattedCategories.map((category)=>{
        if(categories[i] == category.name){
          if(operation == "increment"){
            category.bookNum++;
            this.totalCategoryCount++;
          }
          else{
            category.bookNum--;
            this.totalCategoryCount--;
          }
        }
      });
    }
  }

  // Simulate DELETE /books/:id
  deleteBookById(id: number): BooklistDataService{
    //me quedo con los libros que tengan una ID diferente a la que borro.
    //this.books = this.books.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /books/:id
  updateBookById(id: number, values: Object = {}): Book {
    let book = this.getBookById(id);
    if (!book) {
      return null;
    }
    Object.assign(book, values);
    return book;
  }

  //Simulate /books/:id
  getBookById(id: number): Book{
    //let book = this.books.filter(book => book.id === id).pop();
    return;
  }

}
