import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book";

declare var $;
@Component({
  selector: 'app-booklist-header',
  templateUrl: './booklist-header.component.html',
  styleUrls: ['./booklist-header.component.css']
})
export class BooklistHeaderComponent implements OnInit {

  @Input() categories;
  newBook: Book = new Book();

  constructor() { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    $('.ui.checkbox').checkbox();
  }

  printResults() {
    console.log(this.newBook);
  }
}
