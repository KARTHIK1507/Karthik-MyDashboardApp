import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCourseInfo() {
    return {
      code: 'BA3102',
      name: 'Quantitative Techniques',
      type: 'Program Elective',
      period: 'Semester - I',
      credits: { lecture: 3, tutorial: 0, practical: 1, project: 0, total: 4 },
      outcomes: ['C02', 'C04', 'C05', 'C07', 'C13', 'C014'],
      mappedPO: ['PO7', 'PO10', 'PO12', 'PO8'],
      totalStudents: 102,
      averageMark: 85
    };
  }

  getAssessmentProgress() {
    return {
      labels: ['Assignment', 'Quiz', 'Presentation', 'Lab'],
      datasets: [
        {
          label: 'Completed',
          data: [60, 50, 70, 80],
          backgroundColor: '#90EE90',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Pending',
          data: [40, 50, 30, 20],
          backgroundColor: '#D3D3D3',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };
  }

  getStudentAttendance() {
    return {
      labels: ['1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '3/9'],
      datasets: [
        {
          label: 'Attendance',
          data: [75, 78, 48, 80, 83, 85, 54, 70, 82, 84],
          fill: false,
          borderColor: '#00B4D8',
          tension: 0.1
        }
      ]
    };
  }
}
