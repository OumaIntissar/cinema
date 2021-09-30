import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book3ReservationComponent } from './book3-reservation.component';

describe('Book3ReservationComponent', () => {
  let component: Book3ReservationComponent;
  let fixture: ComponentFixture<Book3ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Book3ReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Book3ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
