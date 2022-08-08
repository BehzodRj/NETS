import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-aditional-packet-page',
  templateUrl: './aditional-packet-page.component.html',
  styleUrls: ['./aditional-packet-page.component.scss']
})
export class AditionalPacketPageComponent implements OnInit {
  changePackagesData: any = []
  modalPackagesId: any
  modalPackagesName: any
  packageLocal_id: any
  modalPackagesConnect = false;
  constructor(private request: RequestsService, private router: Router) { }

  ngOnInit() {
      this.packageLocal_id = localStorage.getItem('package_id')
    
  this.request.getRequest('/api/cust_cab/get_additional_traffic').subscribe(response => {
    this.changePackagesData = response
  }, error => {
    this.request.error(error)
  })
  }

  backToPackages() {
    this.router.navigate(['/packet'])
  }

  modalPackagesOpenButton(name: any, id: number) {
    this.modalPackagesName = name
    this.modalPackagesId = id
    this.modalPackagesConnect = true
  }

  modalPackagesConnectButton() {
    this.request.postRequest(
      '/api/cust_cab/add_additional_traffic',
      {
        'additional_traffic_id': this.modalPackagesId,
      }
    ).subscribe(response => {
      console.log(response);
      this.router.navigate(['/packet'])
    }, error => {
      this.request.error(error)
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
