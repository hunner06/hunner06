import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CareerAnalysis, FinancialAid, School } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  // Dummy financial aid data
  private financialAidSample: FinancialAid = {
    scholarships: ['Scholarship A', 'Scholarship B'],
    grants: ['Grant A'],
    loanOptions: ['Loan Option A']
  };

  // Dummy career analysis data
  private careerAnalysisSample: CareerAnalysis = {
    professions: ['Business Analyst', 'Marketing Manager'],
    outlook: 'Positive outlook with a growing job market.'
  };

  private schools: School[] = [
    {
      id: 1,
      name: 'Louisiana State University',
      program: 'Business Administration',
      cost: 10000,
      city: 'Baton Rouge',
      state: 'LA',
      housingOpportunities: true,
      servicesProvided: ['Child Care', 'Night Classes', 'Financial Aid'],
      suitableFor: ['Single mom', 'Working professional'],
      financialAid: {
        scholarships: ['Scholarship A', 'Scholarship B'],
        grants: ['Pell Grant', 'State Grant'],
        loanOptions: ['Subsidized Loan', 'Unsubsidized Loan']
      },
      careerAnalysis: {
        professions: ['Business Analyst', 'Marketing Manager', 'Entrepreneur'],
        outlook: 'Growing job market with opportunities in various industries.'
      },
      prerequisites: [
        { description: 'High School Diploma or Equivalent', fulfilled: true },
        { description: 'Minimum GPA of 2.5', fulfilled: false }
      ],
      programEligibility: 'General eligibility for our programs requires a high school diploma or GED.',
      resources: [
        'https://www.lsu.edu/business/programs/index.php',
        'https://www.lsu.edu/financialaid/',
        'https://www.lsu.edu/housing/'
      ]
    },
    {
      id: 2,
      name: 'Tulane University',
      program: 'Environmental Law',
      cost: 30000,
      city: 'New Orleans',
      state: 'LA',
      housingOpportunities: false,
      servicesProvided: ['Legal Clinics', 'Study Abroad', 'Internship Programs'],
      suitableFor: ['Law students', 'Environmental advocates'],
      financialAid: {
        scholarships: ['Environmental Law Scholarship'],
        grants: ['Tulane Grant'],
        loanOptions: ['Private Loan']
      },
      careerAnalysis: {
        professions: ['Environmental Lawyer', 'Policy Advisor', 'Nonprofit Advocate'],
        outlook: 'Increasing demand for legal experts in environmental matters.'
      },
      prerequisites: [
        { description: 'Undergraduate Degree', fulfilled: true },
        { description: 'LSAT Score', fulfilled: false }
      ],
      programEligibility: 'Eligibility for our law programs requires an undergraduate degree and a valid LSAT score.',
      resources: [
        'https://law.tulane.edu/academics/environmental-law',
        'https://admission.tulane.edu/financial-aid',
        'https://career.law.tulane.edu/'
      ]
    },
  ];

  getSchools() {
    // This would be replaced with a real HTTP request in a production app
    return of(this.schools);
  }

  getSchoolById(id: number): Observable<School> {
    const school = this.schools.find(s => s.id === id) as School;
    return of(school);
  }

  constructor() { }
}
