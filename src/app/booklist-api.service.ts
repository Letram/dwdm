import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {Book} from "./book";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Category} from "./category";

const API_URL = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class BooklistApiService {

  constructor(private http: Http) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get(API_URL + "/books")
      .pipe(
        map((response) => {
          const books = response.json();
          return books.map((book) => new Book(book))
      }),
        catchError(this.handleError)
      );
  }
  createBook(book: Book): Observable<Book>{
    return this.http.post(API_URL + "/books", book)
      .pipe(
        map((response) => new Book(response.json())),
        catchError(this.handleError)
      );
  }
  getBookByID(id: number): Observable<Book>{
    return this.http.get(API_URL + "/books/" + id)
      .pipe(
        map((response) => new Book(response.json())),
        catchError(this.handleError));
  }
  updateBook(book: Book): Observable<Book>{
    return this.http.put(API_URL + "/books/" + book.id, book)
      .pipe(
        map((response) => new Book(response.json())),
        catchError(this.handleError)
      );
  }
  deleteBookByID(id: number): Observable<null>{
    return this.http.delete(API_URL, "/books/" + id)
      .pipe(
        map((response) => null),
        catchError(this.handleError)
      );
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get(API_URL + "/categories")
      .pipe(
        map((response) => {
          const categories = response.json();
          return categories.map((category) => new Category(category));
        }),
        catchError(this.handleError)
      );
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
