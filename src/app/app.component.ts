import { Component } from '@angular/core';
import {Book} from "./book";
import {BooklistDataService} from "./booklist-data.service";
import {BooklistDataBackendService} from "./booklist-data-backend.service";
import {Category} from "./category";
import {BehaviorSubject} from "rxjs";
import {forEach} from "@angular/router/src/utils/collection";

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
  filteredCategories: Category[] = this.categories;
  count: number = 0;

  ngOnInit(){
    this.booklistDataService.getBooks().subscribe(
      (books) => {
        this.books = books;
        this.count = this.books.length;
      }
    );

    this.booklistDataService.getCategories().subscribe(
      (categories) =>{
        this.categories = categories;
        this.filteredCategories = this.categories.filter((c) => c.bookNum > 0);
      }
    );
  }

  addBook(book: Book) {
    //this.booklistDataService.addBookData(book);
    this.booklistDataService.addBook(book).subscribe(
      (book) => this.books = this.books.concat(book)
    );
    this.categories.forEach((cat) => {
      if(book.categories.includes(cat.name)){
        cat.bookNum++;
        console.log(cat);
        this.booklistDataService.updateCategory(cat);
      }
    });
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
