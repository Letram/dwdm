import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistFooterComponent } from './booklist-footer.component';

describe('BooklistFooterComponent', () => {
  let component: BooklistFooterComponent;
  let fixture: ComponentFixture<BooklistFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
