import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Book} from "../book";
import {Category} from "../category";
import {Observable} from "rxjs";
import {BooklistApiService} from "./booklist-api.service";

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BooklistDataBackendService {

  constructor(private api : BooklistApiService) { }

  //BOOK MANAGEMENT
  getBooks(){
    return this.api.getAllBooks();
  }
  addBook(book: Book){
    return this.api.createBook(book);
  }
  getBookByID(id: string){
    return this.api.getBookByID(id);
  }
  removeBookByID(id: string){
    return this.api.deleteBookByID(id);
  }
  updateBook(book: Book){
    return this.api.updateBook(book);
  }

  //CATEGORY MANAGEMENT
  getCategories(): Observable<Category[]>{
    return this.api.getAllCategories();
  }
  updateCategory(category: Category): Observable<Category>{
    return this.api.updateCategory(category);
  }
  getCategoryByID(id: string): Observable<Category>{
    return this.api.getCategoryByID(id);
  }
}
