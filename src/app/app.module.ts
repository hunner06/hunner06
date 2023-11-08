import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreService } from './services/store.service';
import { StoreListComponent } from './components/store-list/store-list.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { HomeComponent } from './components/home/home.component';
import { InterestinterestAssessmentComponent } from './components/interestinterest-assessment/interestinterest-assessment.component';
import { InteractiveSchoolExplorationComponent } from './components/interactive-school-exploration/interactive-school-exploration.component';
import { SchoolDetailComponent } from './components/school-detail/school-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreListComponent,
    FormPostComponent,
    InterestinterestAssessmentComponent,
    InteractiveSchoolExplorationComponent,
    SchoolDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StoreService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
