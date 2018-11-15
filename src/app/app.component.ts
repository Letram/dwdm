import { Component } from '@angular/core';
import {Book} from "./book";
import {BooklistDataService} from "./booklist-data.service";
import {BooklistDataBackendService} from "./booklist-data-backend.service";
import {Category} from "./category";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libr.ia';

  constructor(private booklistDataService: BooklistDataBackendService){}

  books: Book[] = [];

  categories: Category[] = [];
  count: number = 0;

  ngOnInit(){
    this.booklistDataService.getBooks().subscribe(
      (books) => {
        console.log("yay");
        this.books = books;
      }
    );

    this.booklistDataService.getCategories().subscribe(
      (categories) =>{
        this.categories = categories;
        this.count = this.categories.length;
      }
    );
  }

  addBook(book: Book) {
    //this.booklistDataService.addBookData(book);
    this.booklistDataService.addBook(book).subscribe(
      (book) => this.books = this.books.concat(book)
    );
  }

  updateBook(book: Book) {
    //this.booklistDataService.updateBookById(book.id, book);
    this.booklistDataService.updateBook(book).subscribe(
      (updatedBook) => book = updatedBook
    );
  }

  deleteBook(id: string) {
    //this.booklistDataService.deleteBookById(id);
    this.booklistDataService.removeBookByID(id).subscribe(
      () => this.books = this.books.filter((book) => book.id !== id)
    );
  }
}
