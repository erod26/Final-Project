import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  // private scold: string;
  private input: string = '';
  private output: string = '';

  constructor() {
    // this.scold = "Getting closer";
  
  }
  

  ngOnInit() {
  }

  goConvert(input: string) {
    console.log('This was a success', input);
    this.output = input; 

  }
  
}
