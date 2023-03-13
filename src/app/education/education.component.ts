import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "VIT University",
      course: 'Electrical & Electronics Engineering',
      duration: '2012-2017',
      score: '6.74',
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
