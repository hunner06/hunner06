import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestModel } from 'src/app/models';
import { StoreService, StoreType } from 'src/app/services/store.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  loading = false;
  mainForm!: FormGroup;

  questionLabels: QuestionLabels  = {
    name: 'What is your Name?',
    age: 'What is your age?',
    other: 'Is there any other information you would like to share?'
  };

    constructor(private formBuilder: FormBuilder, private storeService: StoreService) { }


  ngOnInit(): void {
  }
  lifeSituations: string[] = ['Single mom', 'Student', 'Working professional', 'Retired'];
  preferences: string[] = ['Night classes', 'Distance learning', 'In-person classes', 'Weekend sessions'];
  
    // User model
  user = {
    name: '',
    email: '',
    password: '',
    lifeSituation: '',
    preference: ''
  };

  onSubmit() {
    // Process the form submission here
    console.log(this.user);
  }

  
}


interface QuestionLabels {
  [key: string]: string;
  name: string;
  age: string;
  other: string;
};