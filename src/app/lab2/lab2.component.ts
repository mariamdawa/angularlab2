import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component implements OnInit {

  username = 'Mariam Dawa';
  constructor() { }

  ngOnInit(): void {
  }

  OnInput(): void {
    console.log(this.username);
  }

  OnClick(): void {
    this.username = '';
  }
}
