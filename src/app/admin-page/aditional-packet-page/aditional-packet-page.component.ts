import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.changePackagesData = this.request.getLocalPackages
    this.packageLocal_id = localStorage.getItem('packages_id')
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
    this.router.navigate(['/packet', this.modalPackagesId])
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
