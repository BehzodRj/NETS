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
    this.request.getRequest('/api/cust_cab/get_my_traffic?created_at>=2022-08-01&created_at<=2022-08-31').subscribe( (response: any) => {
      console.log(response);
      this.trafficFullData = response[0]
    }, error => {
      this.request.error(error)
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
