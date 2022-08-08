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
    this.request.getRequest('/api/cust_cab/get_my_traffic').subscribe( (response: any) => {
      this.trafficFullData = response[response.length - 1]
      console.log(response[response.length - 1]);
      
    }, error => {
      this.request.error(error)
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
