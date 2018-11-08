import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book";

declare var $;
@Component({
  selector: 'app-booklist-list',
  templateUrl: './booklist-list.component.html',
  styleUrls: ['./booklist-list.component.css']
})
export class BooklistListComponent implements OnInit {

  @Input() books: Book[];

  //TODO: use filter so it can filter our books using isFavourite, hasBeenRead or nothing.
  filter: string[] = ["All", "Favourite", "Read"];
  constructor() { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }



}
