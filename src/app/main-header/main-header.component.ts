import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';



@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private router: Router, private toastService: ToastService) {
  }
  
  ngOnInit() {
  }

  showAbout() {
    this.toastService.showToast('info', 3000, 'This application was designed by Eric, Miguel, Marissa, and Luis.')
    console.log ('toast --->', this.showAbout)
  }

  goToSec() {
    console.log('Does it work?')
    this.router.navigate(['second']);
  }

  goHome() {
    console.log('Going Home')
    this.router.navigate(['main']);
  }
}
