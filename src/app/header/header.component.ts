import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalSignIn = false
  route = ""

  constructor(private router: Router ) { } 

  ngOnInit() {
    this.route = this.router.url;
  }
  
}
