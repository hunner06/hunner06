import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-interactive-school-exploration',
  templateUrl: './interactive-school-exploration.component.html',
  styleUrls: ['./interactive-school-exploration.component.css']
})
export class InteractiveSchoolExplorationComponent implements OnInit {

  schools: School[] = [];
  selectedSchool: School | null = null;

  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
    this.schoolService.getSchools().subscribe(data => {
      this.schools = data;
    });
  }

  onSchoolSelect(school: School) {
    this.selectedSchool = school;
  }

  closeDetail() {
    this.selectedSchool = null;
  }
}
