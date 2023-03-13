import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Gokul Chandan'],
    ['Work Exp', '3.4 Years'],
    ['Education', 'B.Tech-EEE (2017)'],
    ['Coding', 'Freelancing', 'Weight lifting', 'Table Tennis,' ,'Piano player'],
  ];

  aboutMe: string[] = [
'=> EEE graduate, Former Control Panel Engineer, Intern & Angular Developer at Larsen & Toubro cum Nodejs Developer at Photon Interactive Private Ltd',
'=> Self taught Full Stack, MEAN Stack developer'
  ];

  constructor() {}

  ngOnInit(): void {}
}
