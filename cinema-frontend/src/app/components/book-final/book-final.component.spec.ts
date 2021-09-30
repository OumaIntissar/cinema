import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFinalComponent } from './book-final.component';

describe('BookFinalComponent', () => {
  let component: BookFinalComponent;
  let fixture: ComponentFixture<BookFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
