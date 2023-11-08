import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { InterestinterestAssessmentComponent } from './components/interestinterest-assessment/interestinterest-assessment.component';
import { InteractiveSchoolExplorationComponent } from './components/interactive-school-exploration/interactive-school-exploration.component';
import { SchoolDetailComponent } from './components/school-detail/school-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: StoreListComponent },
  { path: 'form', component: FormPostComponent },
  { path: 'assessment', component: InterestinterestAssessmentComponent },
  { path: 'schools', component: InteractiveSchoolExplorationComponent },
  { path: 'schools/:id', component: SchoolDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
