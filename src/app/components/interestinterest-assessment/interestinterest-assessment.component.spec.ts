import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestinterestAssessmentComponent } from './interestinterest-assessment.component';

describe('InterestinterestAssessmentComponent', () => {
  let component: InterestinterestAssessmentComponent;
  let fixture: ComponentFixture<InterestinterestAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestinterestAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestinterestAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
