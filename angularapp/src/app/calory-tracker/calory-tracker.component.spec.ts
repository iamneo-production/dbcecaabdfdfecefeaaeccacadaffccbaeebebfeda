import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloryTrackerComponent } from './calory-tracker.component';

describe('CaloryTrackerComponent', () => {
  let component: CaloryTrackerComponent;
  let fixture: ComponentFixture<CaloryTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloryTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloryTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
