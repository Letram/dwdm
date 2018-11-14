import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import {Book} from "./book";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

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

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
