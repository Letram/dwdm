import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistListItemComponent } from './booklist-list-item.component';

describe('BooklistListItemComponent', () => {
  let component: BooklistListItemComponent;
  let fixture: ComponentFixture<BooklistListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
