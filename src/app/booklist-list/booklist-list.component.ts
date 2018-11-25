import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from "../book";

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

  //TODO: use filter so it can filter our books using isFavourite, hasBeenRead or nothing.
  filter: string[] = ["All", "Favourite", "Read"];
  constructor() { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }


  onBookUpdatedToApp(book:Book) {
    this.onBookUpdated.emit(book);
  }

  onBookDeletedToApp(id: string) {
    this.onBookDeleted.emit(id);
  }
}
