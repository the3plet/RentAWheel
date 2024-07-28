import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindBookingsComponent } from './find-bookings.component';



describe('BookingsComponent', () => {
  let component: FindBookingsComponent;
  let fixture: ComponentFixture<FindBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
