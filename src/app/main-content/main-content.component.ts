import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  // private scold: string;
  private input: string = ''; 
  private alphabet: Array<string> = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  private output: string = '';
 



  constructor() {
    // this.scold = "Getting closer";
  
  }
  

  ngOnInit() {
  }

  goConvert13(input: any) {
    console.log('This was a success', input);
    let output = "";
    for(let i in input){ 
      // console.log("i", i, "input", input);
      // console.log("input[i]", input[i]);
      let letter = input[i].toLowerCase();
      console.log("letter", letter);
      let index = this.alphabet.findIndex((char: string) => {
        console.log("letter == char.toLowerCase();", letter == char.toLowerCase());
        return letter == char.toLowerCase();
      });
      console.log("index", index)
      if (index => 0){
        output += this.alphabet[index+13]
        
      }
      else {
        index = 0;
        output += this.alphabet[index+13]
      }

    }
    console.log("output--->", output);
    this.output = output;
  }



  
}
