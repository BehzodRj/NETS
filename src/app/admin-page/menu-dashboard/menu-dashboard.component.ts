import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  styleUrls: ['./menu-dashboard.component.scss']
})
export class MenuDashboardComponent implements OnInit {
  adminId: any
  packagesId: any

  constructor() { }

  ngOnInit() {
    if( localStorage.getItem('tarifs_id') ) {
      this.adminId = localStorage.getItem('tarifs_id')
    } else {
      this.adminId = 1
    }

    if( localStorage.getItem('packages_id') ) {
      this.packagesId = localStorage.getItem('packages_id')
    } else {
      this.packagesId = 1
    }
  }

}
