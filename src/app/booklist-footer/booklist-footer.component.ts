import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'app-booklist-footer',
  templateUrl: './booklist-footer.component.html',
  styleUrls: ['./booklist-footer.component.css']
})
export class BooklistFooterComponent implements OnInit {

  @Input() formattedCategories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
