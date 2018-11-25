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
  booksAux: Book[] = [];

  categories: Category[] = [];
  categoriesAux: Category[] = [];

  ngOnInit(){
    //me devuelve un array con los documentos de cada libro, hay que parsearlos
    this.booklistDataService.getBooks().subscribe(result => {
      this.booksAux = [];
      result.forEach((unParsedBook) => {
        let newBook = new Book(unParsedBook.payload.doc.data());
        newBook.id = unParsedBook.payload.doc.id;
        this.booksAux.push(newBook);
      });
      this.books = this.booksAux;
    });
    this.booklistDataService.getCategories().subscribe(result => {
      this.categoriesAux = [];
      result.forEach((unParsedCategory) => {
        let newCat = new Category(unParsedCategory.payload.doc.data());
        newCat.id = unParsedCategory.payload.doc.id;
        this.categoriesAux.push(newCat);
      });
      this.categories = this.categoriesAux;
    });
  }

  addBook(book: Book) {
    this.booklistDataService.createBook(book)
      .then(() => {
        this.manageBookNum(book, 1);
      });
  }

  updateBook(book: Book) {
    let id:string = book.id;
    delete book.id;
    this.booklistDataService.updateBook(book, id);
  }

  deleteBook(id: string) {
    let book:Book = this.books.filter((bookElem) => bookElem.id === id)[0];
    this.booklistDataService.deleteBook(id)
      .then(()=>{
        this.manageBookNum(book, -1)
      });
  }

  updateCategory(category: Category, id: string){
    this.booklistDataService.updateCategory(category, id);
  }

  private getNoEmptyCat() {
    return this.categories.filter((cat)=> cat.bookNum > 0);
  }

  private manageBookNum(book: Book, number: number){
    book.categories.forEach((stringCategory) => {
      let parsedCategory: Category = this.categories.filter((filteredCategory) => stringCategory === filteredCategory.name)[0];
      if(parsedCategory.hasOwnProperty('bookNum'))
        parsedCategory.bookNum += number;
      else
        parsedCategory.bookNum = number;
      let catId: string = parsedCategory.id;
      delete parsedCategory.id;
      this.updateCategory(parsedCategory, catId);
    });
  }
}
