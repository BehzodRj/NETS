import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-tarifs-page',
  templateUrl: './tarifs-page.component.html',
  styleUrls: ['./tarifs-page.component.scss']
})
export class TarifsPageComponent implements OnInit {
  changeTarifsData: any = []
  showModalTarifsOrder = false
  tarifs_id: any
  tarifs_name: any

  constructor(private request: RequestsService, private router: Router) { }

  ngOnInit() {
    this.changeTarifsData = this.request.getLocalTarifs
  }

  backToTarif() {
    this.router.navigate(['/admin', localStorage.getItem('tarifs_id')])
  }

  sendTarifOrder(id: number, name: any) {
    this.tarifs_id = id
    this.tarifs_name = name
    this.showModalTarifsOrder = true
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
