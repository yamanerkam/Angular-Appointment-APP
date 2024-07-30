import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppointmentFormComponent } from './new-appointment-form.component';

describe('NewAppointmentFormComponent', () => {
  let component: NewAppointmentFormComponent;
  let fixture: ComponentFixture<NewAppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAppointmentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
