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
  modalPackagesConnect = false;
  modalPackagesId: any
  constructor(private request: RequestsService, private router: Router) { }

  ngOnInit() {
    this.changePackagesData = this.request.getLocalPackages
  }

  backToPackages() {
    this.router.navigate(['/packet', localStorage.getItem('packages_id')])
  }

  modalPackagesOpenButton(id: number) {
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
