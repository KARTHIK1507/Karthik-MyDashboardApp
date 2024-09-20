import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.css']
})
export class AssessmentProgressComponent implements OnInit {
  course : any
  chart: Chart | undefined;

  constructor(private dataService: DataService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.course = this.dataService.getCourseInfo();
    this.renderChart();
  }

  renderChart(): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const data = this.dataService.getAssessmentProgress();
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return value + '%'; 
              }
            }
          }
        }
      }
    });
  }

}

