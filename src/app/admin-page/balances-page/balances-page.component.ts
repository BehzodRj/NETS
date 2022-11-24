import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-balances-page',
  templateUrl: './balances-page.component.html',
  styleUrls: ['./balances-page.component.scss']
})
export class BalancesPageComponent implements OnInit {
  balanceData: any
  modalQrCode = false; 
  loading = false
  constructor(private router: Router, private request: RequestsService) { }

  ngOnInit() {
    this.loading = true
    this.request.getRequest('/api/cust_cab/my_balance').subscribe(response => {
      this.balanceData = response
      this.loading = false
    }, error => {
      this.request.error(error)
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
