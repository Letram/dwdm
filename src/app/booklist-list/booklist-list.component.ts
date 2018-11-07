import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-booklist-list',
  templateUrl: './booklist-list.component.html',
  styleUrls: ['./booklist-list.component.css']
})
export class BooklistListComponent implements OnInit {

  @Input() books: Book[];
  constructor() { }

  ngOnInit() {}



}
