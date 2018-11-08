import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-booklist-list-item',
  templateUrl: './booklist-list-item.component.html',
  styleUrls: ['./booklist-list-item.component.css']
})
export class BooklistListItemComponent implements OnInit {

  @Input() book: Book;
  readonly : Boolean;
  constructor() {
    this.readonly = true;
  }

  ngOnInit() {
  }

  toggleReadonly() {
    this.readonly = !this.readonly;
  }
}
