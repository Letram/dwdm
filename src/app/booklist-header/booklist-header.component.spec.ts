import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistHeaderComponent } from './booklist-header.component';

describe('BooklistHeaderComponent', () => {
  let component: BooklistHeaderComponent;
  let fixture: ComponentFixture<BooklistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
