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

  emitBookEvent() {
    if(!this.validForm())return alert("Form is not valid. Check it again.");
    console.log(this.newBook);
    this.onBookdataCreated.emit(this.newBook);
    this.newBook = new Book();
    $('.headerDropdown').dropdown("restore defaults");
  }

  private validForm() {
    if(!this.newBook.hasOwnProperty("title") || !this.newBook.hasOwnProperty("numOfPages"))return false;
    return !(this.newBook.numOfPages === 0 || this.newBook.categories.length === 0 || (this.newBook.hasBeenRead && this.newBook.readDate !== null));
  }
}
