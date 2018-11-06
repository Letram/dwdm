import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooklistHeaderComponent } from './booklist-header/booklist-header.component';
import { BooklistFooterComponent } from './booklist-footer/booklist-footer.component';
import { BooklistListComponent } from './booklist-list/booklist-list.component';
import { BooklistListItemComponent } from './booklist-list-item/booklist-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistHeaderComponent,
    BooklistFooterComponent,
    BooklistListComponent,
    BooklistListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
