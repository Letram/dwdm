import { Component } from '@angular/core';
import {Book} from "./book";
import {BooklistDataService} from "./booklist-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libr.ia';

  constructor(private booklistDataService: BooklistDataService){}

  get books(){
    return this.booklistDataService.getBooks();
  }

  get categories(){
    return this.booklistDataService.getCategories();
  }

  addBook(book: Book) {
    this.booklistDataService.addBookData(book);
  }
}
