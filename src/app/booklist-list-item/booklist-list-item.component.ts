import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from "../book";

declare var $;

@Component({
  selector: 'app-booklist-list-item',
  templateUrl: './booklist-list-item.component.html',
  styleUrls: ['./booklist-list-item.component.css']
})
export class BooklistListItemComponent implements OnInit {

  @Input() book: Book;

  @Output() onBookUpdated: EventEmitter<Book> = new EventEmitter();
  @Output() onBookDeleted: EventEmitter<Book> = new EventEmitter();

  private readyToSend: Boolean;
  readonly : Boolean;

  constructor() {
    this.readonly = true;
    this.readyToSend = false;
  }

  ngOnInit() {
  }

  toggleReadonly() {
    this.readonly = !this.readonly;
    this.readyToSend = !this.readyToSend;
    if(!this.readyToSend){
      console.log(this.book);
      this.onBookUpdated.emit(this.book);
    }
  }

  removeBook() {
    this.onBookDeleted.emit(this.book);
  }
}
