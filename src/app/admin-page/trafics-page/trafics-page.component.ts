import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-trafics-page',
  templateUrl: './trafics-page.component.html',
  styleUrls: ['./trafics-page.component.scss'],
})
export class TraficsPageComponent implements OnInit {
  trafficFullData: any = []

  constructor(private route: ActivatedRoute, private router: Router, private request: RequestsService) { }

  ngOnInit() {
    this.route.params.subscribe( (param: any) => {
      this.trafficFullData = this.request.getLocalTarifs.filter( (res: any) => res.id == param.id)[0]
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
