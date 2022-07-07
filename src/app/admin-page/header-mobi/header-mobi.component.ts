import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mobi',
  templateUrl: './header-mobi.component.html',
  styleUrls: ['./header-mobi.component.scss']
})
export class HeaderMobiComponent implements OnInit {
  adminId: any
  packagesId: any

  constructor(private router: Router) { }

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

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
