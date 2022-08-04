import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  tarifsData: any = []
 
 
  constructor(private router: Router, private route: ActivatedRoute, private request: RequestsService) { }

  ngOnInit() {
    this.request.getRequest('/api/cust_cab/my_tarif').subscribe(response => {
      this.tarifsData = response
    }, error => {
      this.request.error(error)
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
