import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../category";

declare var $;
@Component({
  selector: 'app-booklist-footer',
  templateUrl: './booklist-footer.component.html',
  styleUrls: ['./booklist-footer.component.css']
})
export class BooklistFooterComponent implements OnInit {

  @Input() formattedCategories: Category[];
  @Input() totalBookCount: number;

  hide: Boolean;
  constructor() {
    this.hide = true;
  }

  ngOnInit() {
    this.formattedCategories = this.formattedCategories.filter((category) => {
      return category.bookNum > 0;
    });
  }

  compareByNum(a, b){
    if(a.bookNum > b.bookNum)return -1;
    if(a.bookNum < b.bookNum)return 1;
    return 0;
  }

  toggleView() {
    this.hide = !this.hide;
    $('.formattedCategory').toggle();
  }
}
