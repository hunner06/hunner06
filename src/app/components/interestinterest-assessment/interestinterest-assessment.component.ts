import { Component } from '@angular/core';

@Component({
  selector: 'app-interestinterest-assessment',
  templateUrl: './interestinterest-assessment.component.html',
  styleUrls: ['./interestinterest-assessment.component.css']
})
export class InterestinterestAssessmentComponent {
  eligibilityOptions = ['TOPS', 'Pell', 'Other financial aid programs'];
  lifeSituations = ['LGBTQ+ friendly schools', 'Veteran support programs', 'Disability services'];
  userInterests = {
    needsHousing: false,
    needsFinancialAid: false,
    eligibility: [],
    lifeSituationSpecifics: [],
    otherPreferences: '',
    assessmentResults: ''
  };

  constructor() {}

  onSubmit() {
    // Process the form submission here
    console.log(this.userInterests);
  }

}
