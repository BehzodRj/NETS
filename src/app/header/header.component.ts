import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  typePassword = 'password'
  modalSignIn = false
  route = ""

  constructor(private router: Router ) { } 

  ngOnInit() {
    this.route = this.router.url;
  }

  changeTypePassword() {
    this.typePassword = 'text'
  }

  changeTypeText() {
    this.typePassword = 'password'
  }

  logIn() {
    this.router.navigate(['/admin', 1])
  }
  
}
