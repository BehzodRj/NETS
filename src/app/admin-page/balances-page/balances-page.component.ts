import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-balances-page',
  templateUrl: './balances-page.component.html',
  styleUrls: ['./balances-page.component.scss']
})
export class BalancesPageComponent implements OnInit {
  modalQrCode = false; 

  constructor(private router: Router, private request: RequestsService) { }

  ngOnInit() {}

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
