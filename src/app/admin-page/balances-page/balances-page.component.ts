import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balances-page',
  templateUrl: './balances-page.component.html',
  styleUrls: ['./balances-page.component.scss']
})
export class BalancesPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
