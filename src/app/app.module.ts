import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AssessmentProgressComponent } from './assessment-progress/assessment-progress.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseInfoComponent,
    AssessmentProgressComponent,
    StudentAttendanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
