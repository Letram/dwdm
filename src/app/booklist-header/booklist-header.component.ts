import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from "../book";

declare var $;
@Component({
  selector: 'app-booklist-header',
  templateUrl: './booklist-header.component.html',
  styleUrls: ['./booklist-header.component.css']
})
export class BooklistHeaderComponent implements OnInit {

  @Input() categories;
  @Input() title: string;
  @Output() onBookdataCreated: EventEmitter<Book> = new EventEmitter();

  newBook: Book = new Book();

  constructor() { }

  ngOnInit() {
    $('.headerDropdown').dropdown();
    $('.ui.checkbox').checkbox();
  }

  printResults() {
    console.log(this.newBook);
  }

  emitBookEvent() {
    this.onBookdataCreated.emit(this.newBook);
    this.newBook = new Book();
  }
}
