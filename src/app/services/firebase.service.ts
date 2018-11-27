import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {Book} from "../book";
import {Category} from "../category";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getBooks(){
    return this.db.collection('Books').snapshotChanges();
  }
  updateBook(book: Book, id: string){
    return this.db.collection('Books').doc(id).set({...book});
  }
  deleteBook(id: string){
    return this.db.collection('Books').doc(id).delete();
  }
  createBook(book: Book){
    return this.db.collection('Books').add({...book});
  }
  getBook(id: string){
    return this.db.collection('Books').doc(id).snapshotChanges();
  }

  getCategories(){
    return this.db.collection('Categories').snapshotChanges();
  }
  updateCategory(category: Category, id: string){
    return this.db.collection('Categories').doc(id).set({...category});
  }

}
