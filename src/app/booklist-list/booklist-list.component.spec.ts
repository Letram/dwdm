import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistListComponent } from './booklist-list.component';

describe('BooklistListComponent', () => {
  let component: BooklistListComponent;
  let fixture: ComponentFixture<BooklistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
