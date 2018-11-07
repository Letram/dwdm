import { Injectable } from '@angular/core';
import {Book} from "./book";

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

  constructor() { }

  getCategories():string[]{
    return this.categories;
  }
  getBooks():Book[]{
    return this.books;
  }
  addBookData(book: Book): BooklistDataService{
    console.log(this.books);
    book.id = this.nextId++;
    this.books.push(book);
    return this;
  }
  // Simulate DELETE /books/:id
  deleteBookById(id: number): BooklistDataService{

    //me quedo con los libros que tengan una ID diferente a la que borro.
    this.books = this.books.filter(todo => todo.id !== id);
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
    let book = this.books.filter(book => book.id === id).pop();
    return book;
  }
}
