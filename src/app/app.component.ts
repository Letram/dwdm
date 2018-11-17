import { Component } from '@angular/core';
import {Book} from "./book";
import {BooklistDataService} from "./booklist-data.service";
import {BooklistDataBackendService} from "./booklist-data-backend.service";
import {Category} from "./category";

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
    book.categories.forEach((stringCategory) => {
      let parsedCategory: Category[] = this.categories.filter((filteredCategory) => stringCategory === filteredCategory.name);
      let index: number = this.filteredCategories.indexOf(parsedCategory[0]);
      parsedCategory[0].bookNum += 1;
      this.booklistDataService.updateCategory(parsedCategory[0]).subscribe((updatedCategory) => {
        this.filteredCategories[index] = updatedCategory;
      });
    });
  }

  updateBook(book: Book) {
    //this.booklistDataService.updateBookById(book.id, book);
    this.booklistDataService.updateBook(book).subscribe(
      (updatedBook) => book = updatedBook
    );
  }

  deleteBook(book: Book) {
    //this.booklistDataService.deleteBookById(id);
    this.booklistDataService.removeBookByID(book.id).subscribe(
      () => this.books = this.books.filter((filteredBook) => filteredBook.id !== book.id)
    );
    book.categories.forEach((stringCategory) => {
      let parsedCategory: Category[] = this.filteredCategories.filter((filteredCategory) => stringCategory === filteredCategory.name);
      let index: number = this.filteredCategories.indexOf(parsedCategory[0]);
      parsedCategory[0].bookNum -= 1;
      console.log(parsedCategory);
      this.booklistDataService.updateCategory(parsedCategory[0]).subscribe((updatedCategory) => {
        console.log({categories: this.categories, index, updated: updatedCategory});
        this.filteredCategories[index] = updatedCategory;
      });
    });
  }
}
