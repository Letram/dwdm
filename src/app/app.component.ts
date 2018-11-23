import { Component } from '@angular/core';
import {Book} from "./book";
import {Category} from "./category";
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libr.ia';

  constructor(private booklistDataService: FirebaseService){}

  books: Book[] = [];

  categories: Array<any>;

  ngOnInit(){
    //me devuelve un array con los documentos de cada libro, hay que parsearlos
    this.booklistDataService.getBooks().subscribe(result => {
      result.forEach((unParsedBook) => {
        let newBook = new Book(unParsedBook.payload.doc.data());
        newBook.id = unParsedBook.payload.doc.id;
        this.books.push(newBook);
        console.log({book: newBook, books: this.books});
      });
    });
    this.booklistDataService.getCategories().subscribe(result => this.categories = result);
  }

  addBook(book: Book) {
    this.booklistDataService.createBook(book);
  }

  updateBook(book: Book, id: string) {
    this.booklistDataService.updateBook(book, id);
  }

  deleteBook(id: string) {
    this.booklistDataService.deleteBook(id);
  }
}
