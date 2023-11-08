import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveSchoolExplorationComponent } from './interactive-school-exploration.component';

describe('InteractiveSchoolExplorationComponent', () => {
  let component: InteractiveSchoolExplorationComponent;
  let fixture: ComponentFixture<InteractiveSchoolExplorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveSchoolExplorationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveSchoolExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
