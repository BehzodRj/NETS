import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-packets-page',
  templateUrl: './packets-page.component.html',
  styleUrls: ['./packets-page.component.scss']
})
export class PacketsPageComponent implements OnInit {
  packagesData: any = []

  constructor(private router: Router, private request: RequestsService) { }

  ngOnInit() {
    this.request.getRequest('/api/cust_cab/get_my_additional_traffic').subscribe( (response: any) => {
      if(response.length < 1) {
        this.packagesData = []
      } else if(response.length > 0) {
        this.packagesData = response[response.length - 1]
      }
    }, error => {
      this.request.error(error)
    })
  }

  connectNewPackage() {
    if(this.packagesData.length < 1) {
      localStorage.setItem('package_id', '0')
    } else {
      localStorage.setItem('package_id', this.packagesData.additional_traffic.id)
    }
    this.router.navigate(['/additionalPackage'])
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
