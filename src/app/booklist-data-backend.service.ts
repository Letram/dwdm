import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Book} from "./book";
import {Category} from "./category";
import {Observable} from "rxjs";
import {BooklistApiService} from "./booklist-api.service";

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BooklistDataBackendService {

  constructor(api : BooklistApiService) { }

  getCategories(){}
  getBooks(){}

  addBook(){}
  removeBookByID(){}
  updateBookByID(){}
  getBookByID(){}
}
