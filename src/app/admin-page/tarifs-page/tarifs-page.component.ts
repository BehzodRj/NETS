import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-tarifs-page',
  templateUrl: './tarifs-page.component.html',
  styleUrls: ['./tarifs-page.component.scss']
})
export class TarifsPageComponent implements OnInit {
  changeTarifsData: any = []
  tarifs_name: any
  tarifsLocal_id: any
  showModalTarifsOrder = false

  constructor(private request: RequestsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: any) => {
      this.tarifsLocal_id = params.id
    })

    this.request.getRequest('/api/cust_cab/get_tarifs').subscribe(response => {
      console.log(response);
      this.changeTarifsData = response
    }, error => {
      this.request.error(error)
    })
  }

  backToTarif() {
    this.router.navigate(['/admin'])
  }

  openTarifOrder(name: any) {
    this.showModalTarifsOrder = true
    this.tarifs_name = name
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
