import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.course = this.dataService.getCourseInfo();
  }
}

