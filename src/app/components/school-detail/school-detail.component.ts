import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit{
  school: School | undefined;

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) {}
  
  ngOnInit(): void {
    const schoolId = Number(this.route.snapshot.paramMap.get('id'));
    this.schoolService.getSchoolById(schoolId).subscribe(school => {
      this.school = school;
    });
  }
}
