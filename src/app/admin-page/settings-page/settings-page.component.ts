import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  typePassword = 'password'

  constructor(private router: Router) { }

  ngOnInit() {}

  changeTypePassword() {
    this.typePassword = 'text'
  }

  changeTypeText() {
    this.typePassword = 'password'
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
