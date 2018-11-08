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
//TODO crear una nueva instancia de un libro (newBook) que se volcará al servicio cuando querramos cambiar cosas del mismo.
//TODO implementar el mismo select que hice para el header con las opciones de las categorías ya pickeadas (mirar lo del ngModel para hacerlo, creo que puedo tirar por ahí)
  toggleReadonly() {
    this.readonly = !this.readonly;
  }
}
