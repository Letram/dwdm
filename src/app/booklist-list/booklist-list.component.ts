import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from "../book";
import {FilterPipe} from "../filter.pipe";

declare var $;
@Component({
  selector: 'app-booklist-list',
  templateUrl: './booklist-list.component.html',
  styleUrls: ['./booklist-list.component.css']
})
export class BooklistListComponent implements OnInit {

  @Input() books: Book[];
  @Output() onBookUpdated: EventEmitter<Book> = new EventEmitter();
  @Output() onBookDeleted: EventEmitter<string> = new EventEmitter();

  filter: string[] = ["None", "Favourite", "Read"];
  searchTitle: string = "";
  constructor() { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

  filterBooks(){
    let filter: string = $('#filterSelect').val();
    switch (filter) {
      case "Favourite":
        this.books
          .sort((book1, book2) => {
            if(book1.isFavourite && !book2.isFavourite)return -1;
            if(!book1.isFavourite && book2.isFavourite)return 1;
            return 0;
          });
        break;
      case "Read":
        this.books
          .sort((book1, book2) => {
            if(book1.hasBeenRead && !book2.hasBeenRead)return -1;
            if(!book1.hasBeenRead && book2.hasBeenRead)return 1;
            return 0;
          });
        break;
      case "None":
        this.books
          .sort((book1, book2) => {
            if(book1.title > book2.title)return 1;
            if(book1.title < book2.title)return -1;
            return 0;
        });
        break;
    }
  }
  onBookUpdatedToApp(book:Book) {
    this.onBookUpdated.emit(book);
  }

  onBookDeletedToApp(id: string) {
    this.onBookDeleted.emit(id);
  }
}
