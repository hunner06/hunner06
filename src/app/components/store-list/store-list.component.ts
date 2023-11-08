import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Class, School, Student } from 'src/app/models';
import { StoreService, StoreType } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit{
  schools: School[] = [];
  classes: Class[] = [];
  students: Student[] = [];
  
  myForm!: FormGroup;

  constructor(private storeService: StoreService) {}
  
  ngOnInit() {
    this.storeService.loadData().subscribe({
      next: () => {
        // do something when the data is loaded
        this.updateData();
      },
      error: (error) => {
        console.error('Error loading data:', error);
      },
    });
    
    //.filter((item: School) => item.state !== 26)
    //.sortBy('dateOfFormation', true);

    this.myForm = new FormGroup({
      selectedType: new FormControl('', Validators.required),
      newSchoolName: new FormControl(''),
      newSchoolCity: new FormControl(''),
      newSchoolState: new FormControl(''),
      newClassName: new FormControl(''),
      newClassTeacher: new FormControl(''),
      selectedSchoolId: new FormControl(0),
      newStudentName: new FormControl(''),
      newStudentAge: new FormControl(''),
      selectedClassId: new FormControl(0),
    });
  }

  updateData(){
    this.schools = this.storeService.store(StoreType.School).sortBy('name', true).get();
    this.classes = this.storeService.store(StoreType.Class).get();
    this.students = this.storeService.store(StoreType.Student).get();
  }

  getClassesForSchool(schoolId: number): Class[] {
    return this.classes.filter((c) => c.schoolId === schoolId);
    debugger
    }
    
    getStudentsForClass(classId: number): Student[] {
    return this.students.filter((s) => s.classId === classId);
    }
    

    // onSubmit(form: NgForm) {
    //   switch (this.selectedType) {
    //     case 'school':
    //       this.storeService.store(StoreType.School).add(new School(-1,this.newSchoolName, this.newSchoolCity, this.newSchoolState));
    //       break;
    //     case 'class':
    //       this.storeService.store(StoreType.Class).add(new Class(-1, this.newClassName, this.newClassTeacher, this.selectedSchoolId));
    //       break;
    //     case 'student':
    //       this.storeService.store(StoreType.Class).add(new Student(-1, this.newStudentName, this.newStudentAge, this.selectedClassId));
    //       break;
    //   }
    //   this.updateData();
    // }
    onSubmit() {
      if (this.myForm.valid) {
        const formType = this.myForm.get('selectedType')?.value;
        switch (formType) {
          case 'school':
            this.storeService.store(StoreType.School).add(new School(
              -1,
              this.myForm.get('newSchoolName')?.value,
              this.myForm.get('newSchoolCity')?.value,
              this.myForm.get('newSchoolState')?.value,
            ));
            break;
          case 'class':
            this.storeService.store(StoreType.Class).add(new Class(
              -1,
              this.myForm.get('newClassName')?.value,
              this.myForm.get('newClassTeacher')?.value,
              Number(this.myForm.get('selectedSchoolId')?.value),
            ));
            break;
          case 'student':
            this.storeService.store(StoreType.Student).add(new Student(
              -1,
             this.myForm.get('newStudentName')?.value,
             this.myForm.get('newStudentAge')?.value,
             Number(this.myForm.get('selectedClassId')?.value),
            ));
            break;
          default:
            console.log('Invalid form type.');
        }
        this.resetForm();
        this.updateData();
      }
    }
    resetForm(){
      this.myForm.reset({
        selectedType: '',
        newSchoolName: '',
        newSchoolCity: '',
        newSchoolState: '',
        newClassName: '',
        newClassTeacher: '',
        selectedSchoolId: '',
        newStudentName: '',
        newStudentAge: '',
        selectedClassId: ''
      });
    }
}
