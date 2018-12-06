import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  private input: string = '';
  private alphabet: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","`","!","@","#","$","%","^","&","*","`","!","@","#","$","%","^","&","*","`","!","@","#","$","%","^","&","*"];
  private output: string = '';

  constructor(private router: Router) {
  }


  ngOnInit() {
  }

  goConvert13(input: any) {
    console.log('This was a success', input);
    input = input.trim().replace(/ /g, '');
    let output = "";
    for (let i in input) {
      let letter = input[i].toLowerCase();
      console.log("letter", letter);
      let index = this.alphabet.findIndex((char: string) => {
        console.log("letter == char.toLowerCase();", letter == char.toLowerCase());
        return letter == char.toLowerCase();
      });
      console.log("index", index)
      if (index => 0) {
        output += this.alphabet[index + 13].toLowerCase();
      } else {
        index = 0;
        output += this.alphabet[index + 13].toLowerCase();
        
      }
    }
    console.log("output--->", output);
    this.output = output;
  }




}
